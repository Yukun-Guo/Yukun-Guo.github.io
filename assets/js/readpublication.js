$(document).ready(function () {
  $.ajax({
    url: "data/publications.csv",
    dataType: "text",
    success: function (data) {
      var publication_data = data.split(/\r?\n|\r/);
      var table_data = '<ol reversed>';
      for (let count = 1; count < publication_data.length-1; count++) {
        var cell_data = publication_data[count].split(",");
        table_data += '<li style="padding-bottom: 10px; text-align: justify">';
        // a author
        if (cell_data[2].trim().toLowerCase() != "nan")
            table_data += '<span class="pub-item-a-author">' + cell_data[2].replaceAll("|", ',') + '</span>'
        // me
        table_data += '<span style="font-weight: bold">' + cell_data[3] + '</span>'
        // other authors
        table_data += '<span class="pub-item-other-author">' + cell_data[4].replaceAll("|", ',') + '</span>'
        // title
        table_data += '<span class="pub-item-title"> <a href="'+ cell_data[12] +'" target="blank">'+ cell_data[5].replaceAll("|", ',')+ '</a></span>'
        // Journal
        table_data += '<span style="font-style: italic;">' + cell_data[6].replaceAll("|", ',')+ '</span>'
        // left info
        table_data += '<span class="pub-item-leftinfo">' + cell_data[7].replaceAll("|", ',') + '</span>'

        table_data += '</li>';
      }
      table_data += '</ol>';
      $('#publication_table').html(table_data);//.replaceAll("|", ',')
    }
  });
});

