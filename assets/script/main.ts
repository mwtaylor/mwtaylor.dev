import $ from "jquery";

const resize_height_in_flex_row_attribute = "data-match-flex-row-height";

function resize_heights_in_flex_rows() {
    $("[" + resize_height_in_flex_row_attribute + "]").each((_, thing) => {
        const parent_selector = $(thing).attr(resize_height_in_flex_row_attribute)
        const parent = $(thing).parent().closest(parent_selector);

        if (parent.css("display") == "flex" && parent.css("flex-direction") == "row") {
            let height = 1;
            // Set height to 1px initially so the max height isn't determined by itself
            $(thing).height(height + "px");

            parent.children().each((_, child) => {
                const child_height = $(child).height();
                if (child_height > height) {
                    height = child_height;
                }
            })
            $(thing).height(height + "px");
        }
        else {
            $(thing).height("auto");
        }
    });
}

function set_large_text_layout() {
    $("body").addClass("large-text");
}

function handle_large_fonts() {
    const tester = $("<div>");
    new ResizeObserver(() => {
        const default_font_size = tester.width();

        if (default_font_size > 16) {
            set_large_text_layout();
            resize_heights_in_flex_rows();
        }
    }).observe(tester.get().pop(), { box: "device-pixel-content-box" });

    tester.css("width", "1rem");
    $("body").append(tester);
}

handle_large_fonts();

resize_heights_in_flex_rows();

$(window).on("resize", () => {
    resize_heights_in_flex_rows();
});
