$(document).ready(function () {
  $.ajax({
    url: "data/publications.csv",
    dataType: "text",
    success: function (data) {
      var publication_data = data.split(/\r?\n|\r/);
      
      // publications
      var table_data = '<ol reversed>';
      var featured_work_items = '';
      var recent_work_items = '';
      for (let count = 1; count < publication_data.length-1; count++) {
        var cell_data = publication_data[count].split(",");
        /**** publications ****/
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
        table_data += '<span style="font-style: italic;">&nbsp' + cell_data[6].replaceAll("|", ',')+ '</span>'
        // left info
        table_data += '<span class="pub-item-leftinfo">' + cell_data[7].replaceAll("|", ',') + '</span>'
        table_data += '</li>';
        /**** Recent works ****/
        if (count <= 6)
        {
          recent_work_items += '<div class="col-lg-4 col-md-6 portfolio-item">';
          recent_work_items += '<div class="portfolio-wrap">';
          recent_work_items += '<img src="'+cell_data[9]+'" class="img-fluid" alt="" style="height:300px; width:400px; object-fit: scale-down;"></img>';
          recent_work_items += '<div class="portfolio-links">'
          recent_work_items += '<a href="'+cell_data[9]+'" data-gallery="portfolioGallery" class="portfolio-lightbox" title="'+cell_data[5].replaceAll("|", ',')+'"><i class="bx bx-plus"></i></a>'
          recent_work_items += '<a href="'+ cell_data[12] +'" title="More Details"><i class="bx bx-link"></i></a>'
          recent_work_items += '</div>';
          recent_work_items += '</div>';
          recent_work_items += '</div>';
        }
        /**** Featured works ****/
      }
      /**** publications ****/
      table_data += '</ol>';
      
      $('#recent-work-items').html(recent_work_items)
      $('#publication_table').html(table_data);
      /**** Recent works ****/

      /**** Featured works ****/
      const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
      });
    }
  });
});

