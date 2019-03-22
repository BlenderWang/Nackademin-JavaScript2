$(() => {
    $("#addBtn").click(() => {
        const newItem = $("#newItem").val();
        if (newItem === "") {
            $("#message").show();
            return;
        } else {
            $("#message").hide();
            $("#table").append(
                $("<tr>")
                    .append(
                        $("<input>")
                            .attr("type", "checkbox")
                            .attr("class", "checked")
                    )
                    .append($("<label>").attr("for", "check"))
                    .append(
                        "<th>" + newItem + "</th>"
                    )
                    .append(
                        $("<input>")
                            .attr("type", "button")
                            .attr("id", "delete")
                            .attr("title", "Delete")
                            .val("Ta Bort")
                            .addClass("deleteBtn")
                    )
            );
            $("#newItem").val("");
        }
    });

    $('#newItem').keypress((e) => {
        if(e.keyCode === 13) {
            $('#addBtn').click();
            e.preventDefault();
        }
    });

    function checkThis() {
        if (this.checked) {
            $(this)
                .closest("tr")
                .addClass("strike");
        } else {
            $(this)
                .closest("tr")
                .removeClass("strike");
        }
    }

    function removeItem() {
        // $(this).closest('tr').fadeOut('slow');
        $(this).closest('tr').remove();
    }

    $(document).on("click", ".checked", checkThis);

    $(document).on('click', '.deleteBtn', removeItem);
});