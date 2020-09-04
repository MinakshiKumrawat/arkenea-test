
/*languages Multiselect JS */

var multi;

Array.prototype.search = function (elem) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == elem) return i;
    }

    return -1;
};

var Multiselect = function (selector) {
    if (!$(selector)) {
        console.error("ERROR: Element %s does not exist.", selector);
        return;
    }

    this.selector = selector;
    this.selections = [];

    (function (that) {
        that.events();
    })(this);
};

Multiselect.prototype = {
    open: function (that) {
        var target = $(that).parent().attr("data-target");

        // If we are not keeping track of this one's entries, then
        // start doing so.
        if (!this.selections) {
            this.selections = [];
        }

        $(this.selector + ".multiselect").toggleClass("active");
    },

    close: function () {
        $(this.selector + ".multiselect").removeClass("active");
    },

    events: function () {
        var that = this;

        $(document).on("click", that.selector + ".multiselect > .title", function (e) {
            if (e.target.className.indexOf("close-icon") < 0) {
                that.open();
            }
        });

        $(document).on("click", that.selector + ".multiselect option", function (e) {
            var selection = $(this).attr("value");
            var target = $(this).parent().parent().attr("data-target");

            var io = that.selections.search(selection);

            if (io < 0) that.selections.push(selection);
            else that.selections.splice(io, 1);

            that.selectionStatus();
            that.setSelectionsString();
        });

        $(document).on("click", that.selector + ".multiselect > .title > .close-icon", function (e) {
            that.clearSelections();
        });

        $(document).click(function (e) {
            if (e.target.className.indexOf("title") < 0) {
                if (e.target.className.indexOf("text") < 0) {
                    if (e.target.className.indexOf("-icon") < 0) {
                        if (e.target.className.indexOf("selected") < 0 ||
                            e.target.localName != "option") {
                            that.close();
                        }
                    }
                }
            }
        });
    },

    selectionStatus: function () {
        var obj = $(this.selector + ".multiselect");

        if (this.selections.length) obj.addClass("selection");
        else obj.removeClass("selection");
    },

    clearSelections: function () {
        this.selections = [];
        this.selectionStatus();
        this.setSelectionsString();
    },

    getSelections: function () {
        return this.selections;
    },

    setSelectionsString: function () {
        var selects = this.getSelectionsString().split(", ");
        $(this.selector + ".multiselect > .title").attr("title", selects);

        var opts = $(this.selector + ".multiselect option");

        if (selects.length > 6) {
            var _selects = this.getSelectionsString().split(", ");
            _selects = _selects.splice(0, 6);
            $(this.selector + ".multiselect > .title > .text")
                .text(_selects + " [...]");
        } else {
            $(this.selector + ".multiselect > .title > .text")
                .text(selects);
        }

        for (var i = 0; i < opts.length; i++) {
            $(opts[i]).removeClass("selected");
        }

        for (var j = 0; j < selects.length; j++) {
            var select = selects[j];

            for (var i = 0; i < opts.length; i++) {
                if ($(opts[i]).attr("value") == select) {
                    $(opts[i]).addClass("selected");
                    break;
                }
            }
        }
    },

    getSelectionsString: function () {
        if (this.selections.length > 0)
            return this.selections.join(",  ");
        else return "Select";
    },

    setSelections: function (arr) {
        if (!arr[0]) {
            error("ERROR: This does not look like an array.");
            return;
        }

        this.selections = arr;
        this.selectionStatus();
        this.setSelectionsString();
    },
};

$(document).ready(function () {
    multi = new Multiselect("#languages");
});




/*Add New User JS*/
$(document).ready(function () {
    let lineNo = 1;

    $('#save-user').click(function () {
        var fullname = $(".full_name").val();
        var datebirth = $(".dateofbirth").val();
        var languages = $(".noselect > span").html();
        var gender = $(".gender").val();
        var about = $(".about").val();


        markup = "<tr><td>" +
            fullname + "</td><td>" + datebirth + "</td><td>" + languages + "</td><td>" + gender + "</td><td>" + about + "</td></tr>";
        tableBody = $("table tbody");
        tableBody.append(markup);
        lineNo++;


        $('#myModal').modal('hide');


        var trs = document.querySelectorAll('tbody tr');
        for (var i = 0; i <= trs.length; i++) {


            if (i == 1) {

                $('#progressbar').LineProgressbar({
                    percentage: 10

                });
            } else
            if (i == 2) {
                $('#progressbar').LineProgressbar({
                    percentage: 20

                });
            } else
            if (i == 3) {

                $('#progressbar').LineProgressbar({
                    percentage: 30

                });
            } else if (i == 4) {

                $('#progressbar').LineProgressbar({
                    percentage: 40

                });
            } else if (i == 5) {

                $('#progressbar').LineProgressbar({
                    percentage: 50

                });
            } else if (i == 6) {

                $('#progressbar').LineProgressbar({
                    percentage: 60

                });
            } else if (i == 7) {

                $('#progressbar').LineProgressbar({
                    percentage: 70

                });
            } else if (i == 8) {

                $('#progressbar').LineProgressbar({
                    percentage: 80

                });
            } else if (i == 9) {

                $('#progressbar').LineProgressbar({
                    percentage: 90

                });
            } else if (i == 10) {

                $('#progressbar').LineProgressbar({
                    percentage: 100

                });
            }


        }


    });
});


/*Progressbar JS According to table Row*/
var trs = document.querySelectorAll('tbody tr');
for (var i = 0; i <= trs.length; i++) {


    if (i == 1) {

        $('#progressbar').LineProgressbar({
            percentage: 10

        });
    } else
    if (i == 2) {
        $('#progressbar').LineProgressbar({
            percentage: 20

        });
    } else
    if (i == 3) {

        $('#progressbar').LineProgressbar({
            percentage: 30

        });
    } else if (i == 4) {

        $('#progressbar').LineProgressbar({
            percentage: 40

        });
    } else if (i == 5) {

        $('#progressbar').LineProgressbar({
            percentage: 50

        });
    } else if (i == 6) {

        $('#progressbar').LineProgressbar({
            percentage: 60

        });
    } else if (i == 7) {

        $('#progressbar').LineProgressbar({
            percentage: 70

        });
    } else if (i == 8) {

        $('#progressbar').LineProgressbar({
            percentage: 80

        });
    } else if (i == 9) {

        $('#progressbar').LineProgressbar({
            percentage: 90

        });
    } else if (i == 10) {

        $('#progressbar').LineProgressbar({
            percentage: 100

        });
    }
}


/*Sidebar Open Js*/
$("#show-report").click(function () {
    $(".sidebar").toggleClass("show-div");
});


/*Sidebar Close JS*/
$(".close-btn").click(function () {
    $(".sidebar").toggleClass("show-div");
});