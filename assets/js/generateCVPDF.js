function generateCV(personName) {
  //Gets the BibTex files and adds them together

  // parse bibtex
  var bibParser = new BibtexParser();
  var bibdisp = new BibtexDisplay();
  bibParser.setInput(g_bibstring);
  try {
    bibParser.bibtex();
  } catch (e) {
    bibParser.errorThrown(e);
    console.error(e);
  }
  var entries = bibParser.getEntries();
  var entriesArrayPaper = [];
  var entriesArrayPatent = [];
  var entriesArrayAward = [];
  var entriesArrayConferencePresentation = [];
  for (var entryKey in entries) {
    switch (entries[entryKey].BIBTEXTYPEKEY) {
      case "PATENT":
        entriesArrayPatent.push(entries[entryKey]);
        break;
      case "AWARD":
        entriesArrayAward.push(entries[entryKey]);
        break;
      case "CONFERENCEPRE":
        entriesArrayConferencePresentation.push(entries[entryKey]);
        break;
      default:
        entriesArrayPaper.push(entries[entryKey]);
        break;
    }
  }
  entriesArrayPaper = bibdisp.sortArray(
    entriesArrayPaper,
    "DATE",
    "DESC",
    "date"
  );
  entriesArrayAward = bibdisp.sortArray(
    entriesArrayAward,
    "DATE",
    "DESC",
    "date"
  );
  entriesArrayPatent = bibdisp.sortArray(
    entriesArrayPatent,
    "DATE",
    "DESC",
    "date"
  );
  entriesArrayConferencePresentation = bibdisp.sortArray(
    entriesArrayConferencePresentation,
    "DATE",
    "DESC",
    "date"
  );

  // for (var entryKey in entriesArrayPaper) {
  //     var entry = entriesArrayPaper[entryKey];
  // }
  // assemble PDF
  var doc = new window.jspdf.jsPDF("p", "em", "A4");

  // name
  doc.setFontSize(18);
  doc.setFont("times", "bold");
  doc.text("Yukun Guo", 20, 5);

  doc.setFont("times", "normal");
  doc.setFontSize(12);
  doc.text(
    4,
    7,
    doc.splitTextToSize(
      "Department of Ophthalmology and Biomedical Engineering",
      27
    )
  );
  doc.text(
    4,
    8.25,
    doc.splitTextToSize(
      "School of Medicine, Oregon Health & Science University (OHSU) ",
      27
    )
  );
  doc.text(4, 9.5, doc.splitTextToSize("515 Southwest Campus Drive", 19));
  doc.text(4, 10.75, doc.splitTextToSize("Portland OR 97239", 19));

  doc.text(36, 7, doc.splitTextToSize("Email:", 10));
  doc.setTextColor(0, 0, 255);
  doc.text(39, 7, doc.splitTextToSize("guoyu@ohsu.edu", 10));

  doc.setTextColor(0, 0, 0);
  doc.text(30.9, 8.25, "Website:");
  doc.setTextColor(0, 0, 255);
  doc.text(34.7, 8.25, "https://Yukun-Guo.github.io");

  doc.setTextColor(0, 0, 0);
  doc.text(26.5, 9.5, "ORCID:");
  doc.setTextColor(0, 0, 255);
  doc.text(30.5, 9.5, "https://orcid.org/0000-0002-6784-2355");

  doc.setTextColor(0, 0, 0);
  doc.text(26, 10.75, "Google Scholar:");
  doc.setTextColor(0, 0, 255);
  doc.text(33, 10.75, "https://bit.ly/scholar-Yukun-Guo");

  doc.setTextColor(0, 0, 0);
  doc.setFont("times", "bold");
  doc.text(4, 14, "EDUCATION");
  doc.line(4, 14.5, 46, 14.5);

  doc.setFont("times", "normal");
  doc.text(
    4,
    16,
    "2022-Present  Ph.D. Biomedical Engineering, Oregon Health & Science University, Portland OR, U.S."
  );
  doc.text(
    4,
    17.3,
    "2017               M.S.  Computer Science and Technology, University of Jinan, Jinan, China"
  );
  doc.text(
    4,
    18.6,
    "2013               B.S.   Computer Science and Technology, University of Jinan, Jinan, China"
  );

  doc.setTextColor(0, 0, 0);
  doc.setFont("times", "bold");
  doc.text(4, 21, "PROFESSIONAL POSITIONS");
  doc.line(4, 21.5, 46, 21.5);
  doc.setFont("times", "normal");

  doc.text(
    4,
    23,
    "2019-2022     Research assistant   Casey Eye Institute, OHSU, Portland OR, U.S."
  );
  doc.text(
    4,
    24.3,
    "2017-2018     Visiting scholar       Casey Eye Institute, OHSU, Portland OR, U.S."
  );

  // add patents
  doc.setTextColor(0, 0, 0);
  doc.setFont("times", "bold");
  doc.text(4, 27, "INTELLECTUAL PROPERTY");
  doc.line(4, 27.5, 46, 27.5);
  var mrgtop = 28.8;

  doc.setFont("times", "normal");
  for (let i = 0; i < entriesArrayPatent.length; i++) {
    var entry = entriesArrayPatent[i];
    if (mrgtop > 60) {
      doc.addPage("A4");
      mrgtop = 6;
    }
    doc.setFont("times", "bold");
    doc.setTextColor(50, 150, 250);
    var titlestr = doc.splitTextToSize(
      (i + 1).toString() + ". " + entry.TITLE.replace("{", "").replace("}", ""),
      42
    );
    for (var tstr in titlestr) {
      if (entry.URL) {
        doc.textWithLink(titlestr[tstr], 4, mrgtop, {
          url: entry.URL,
        });
      } else if (entry.DOI) {
        doc.textWithLink(titlestr[tstr], 4, mrgtop, {
          url: "http: //dx.doi.org/" + entry.DOI,
        });
      } else {
        doc.text(titlestr[tstr], 4, mrgtop);
      }
      mrgtop = mrgtop + 1.2;
    }

    doc.setFont("times", "normal");
    doc.setTextColor(0);
    doc.text("   " + spraseAuthor(entry.AUTHOR), 4, mrgtop);
    mrgtop = mrgtop + 1.2;
    doc.setTextColor(0);
    doc.setFont("times", "italic");
    doc.text("    " + entry.JOURNAL + ", " + entry.YEAR, 4, mrgtop);
    mrgtop = mrgtop + 1.5;
  }

  // add awards
  mrgtop = mrgtop + 1;
  doc.setTextColor(0, 0, 0);
  doc.setFont("times", "bold");
  doc.text(4, mrgtop, "ACADEMIC AWARDS");
  doc.line(4, mrgtop + 0.5, 46, mrgtop + 0.5);

  mrgtop = mrgtop + 2;
  doc.setFont("times", "normal");
  for (let i = 0; i < entriesArrayAward.length; i++) {
    var entry = entriesArrayAward[i];
    if (mrgtop > 60) {
      doc.addPage("A4");
      mrgtop = 6;
    }
    doc.setFont("times", "bold");
    doc.setTextColor(50, 150, 250);
    var titlestr = doc.splitTextToSize(
      (i + 1).toString() + ". " + entry.TITLE.replace("{", "").replace("}", ""),
      42
    );
    for (var tstr in titlestr) {
      if (entry.URL) {
        doc.textWithLink(titlestr[tstr], 4, mrgtop, {
          url: entry.URL,
        });
      } else if (entry.DOI) {
        doc.textWithLink(titlestr[tstr], 4, mrgtop, {
          url: "http: //dx.doi.org/" + entry.DOI,
        });
      } else {
        doc.text(titlestr[tstr], 4, mrgtop);
      }
      mrgtop = mrgtop + 1.2;
    }
    doc.setFont("times", "italic");
    doc.setTextColor(0);
    doc.text("    " + entry.JOURNAL + ", " + entry.YEAR, 4, mrgtop);
    mrgtop = mrgtop + 1.5;
  }

  // add papers
  mrgtop = mrgtop + 1;
  doc.setTextColor(0, 0, 0);
  doc.setFont("times", "bold");
  doc.text(4, mrgtop, "PEER-REVIEWED JOURNAL PAPERS");
  doc.line(4, mrgtop + 0.5, 46, mrgtop + 0.5);

  mrgtop = mrgtop + 2;
  doc.setFont("times", "normal");
  doc.setFontSize(11);
  for (let i = 0; i < entriesArrayPaper.length; i++) {
    var entry = entriesArrayPaper[i];
    if (mrgtop > 60) {
      doc.addPage("A4");
      mrgtop = 6;
    }
    doc.setFont("times", "bold");
    doc.setTextColor(50, 150, 250);
    var titlestr = doc.splitTextToSize(
      (i + 1).toString() + ". " + entry.TITLE.replace("{", "").replace("}", ""),
      42
    );
    for (var tstr in titlestr) {
      if (entry.URL) {
        doc.textWithLink(titlestr[tstr], 4, mrgtop, {
          url: entry.URL,
        });
      } else if (entry.DOI) {
        doc.textWithLink(titlestr[tstr], 4, mrgtop, {
          url: "http: //dx.doi.org/" + entry.DOI,
        });
      } else {
        doc.text(titlestr[tstr], 4, mrgtop);
      }
      mrgtop = mrgtop + 1.2;
    }

    doc.setFont("times", "normal");
    doc.setTextColor(0);
    var authstr = doc.splitTextToSize(spraseAuthor(entry.AUTHOR).trim(), 42);

    // doc.text(authstr, 4, mrgtop);
    // mrgtop = mrgtop + 1.2 * authstr.length;

    for (var tstr in authstr) {
      a = authstr[tstr].indexOf(personName);
      if (a > -1) {
        var p_auth = authstr[tstr].substring(0, a);
        doc.text(p_auth, 4, mrgtop);
        var rt = 1 - (p_auth.match(/,/g) || []).length * 0.01;

        doc.setFont("times", "bold");
        var l1 = 4 + doc.getTextWidth(p_auth.trim()) * rt;
        doc.text(personName, l1, mrgtop);
        doc.setFont("times", "normal");
        var l2 = l1 + doc.getTextWidth(personName) + 0.45;
        doc.text(
          authstr[tstr].substring(a + personName.length, authstr[tstr].length),
          l2,
          mrgtop
        );
      } else {
        doc.text(authstr[tstr], 4, mrgtop);
      }

      mrgtop = mrgtop + 1.2;
    }

    doc.setTextColor(0);
    doc.setFont("times", "italic");
    if (entry.JOURNAL) {
      var pubJ = entry.JOURNAL;
    } else if (entry.BOOKTITLE) {
      var pubJ = "In " + entry.BOOKTITLE;
    }

    var jornalinfo = pubJ;
    if (typeof entry.MONTH !== "undefined") {
      jornalinfo = jornalinfo + ", " + entry.MONTH;
    }
    if (typeof entry.YEAR !== "undefined") {
      jornalinfo = jornalinfo + ", " + entry.YEAR + ". ";
    }
    if (typeof entry.VOLUME !== "undefined") {
      jornalinfo = jornalinfo + entry.VOLUME;
    }
    if (typeof entry.NUMBER !== "undefined") {
      jornalinfo = jornalinfo + "(" + entry.NUMBER + ")";
    }
    if (typeof entry.PAGES !== "undefined") {
      jornalinfo = jornalinfo + ": " + entry.PAGES + ". ";
    }
    if (typeof entry.PMID !== "undefined") {
      jornalinfo = jornalinfo + "PMID: " + entry.PMID;
    }
    var journalstr = doc.splitTextToSize(jornalinfo, 42);
    doc.text(journalstr, 4, mrgtop);
    mrgtop = mrgtop + 1.2 * journalstr.length + 0.5;
  }

  // add conference presentations

  mrgtop = mrgtop + 1;
  doc.setTextColor(0, 0, 0);
  doc.setFont("times", "bold");
  doc.text(4, mrgtop, "CONFERENCE PRESENTATIONS");
  doc.line(4, mrgtop + 0.5, 46, mrgtop + 0.5);

  mrgtop = mrgtop + 2;
  doc.setFont("times", "normal");
  doc.setFontSize(11);
  for (let i = 0; i < entriesArrayConferencePresentation.length; i++) {
    var entry = entriesArrayConferencePresentation[i];
    if (mrgtop > 60) {
      doc.addPage("A4");
      mrgtop = 6;
    }
    doc.setFont("times", "bold");
    doc.setTextColor(50, 150, 250);
    var titlestr = doc.splitTextToSize(
      (i + 1).toString() + ". " + entry.TITLE.replace("{", "").replace("}", ""),
      42
    );
    for (var tstr in titlestr) {
      if (entry.URL) {
        doc.textWithLink(titlestr[tstr], 4, mrgtop, {
          url: entry.URL,
        });
      } else if (entry.DOI) {
        doc.textWithLink(titlestr[tstr], 4, mrgtop, {
          url: "http: //dx.doi.org/" + entry.DOI,
        });
      } else {
        doc.text(titlestr[tstr], 4, mrgtop);
      }
      mrgtop = mrgtop + 1.2;
    }

    doc.setFont("times", "normal");
    doc.setTextColor(0);
    var authstr = doc.splitTextToSize(spraseAuthor(entry.AUTHOR).trim(), 42);

    // doc.text(authstr, 4, mrgtop);
    // mrgtop = mrgtop + 1.2 * authstr.length;

    for (var tstr in authstr) {
      a = authstr[tstr].indexOf(personName);
      if (a > -1) {
        var p_auth = authstr[tstr].substring(0, a);
        doc.text(p_auth, 4, mrgtop);
        var rt = 1 - (p_auth.match(/,/g) || []).length * 0.01;

        doc.setFont("times", "bold");
        var l1 = 4 + doc.getTextWidth(p_auth.trim()) * rt;
        doc.text(personName, l1, mrgtop);
        doc.setFont("times", "normal");
        var l2 = l1 + doc.getTextWidth(personName) + 0.45;
        doc.text(
          authstr[tstr].substring(a + personName.length, authstr[tstr].length),
          l2,
          mrgtop
        );
      } else {
        doc.text(authstr[tstr], 4, mrgtop);
      }

      mrgtop = mrgtop + 1.2;
    }

    doc.setTextColor(0);
    doc.setFont("times", "italic");
    var pubJ = "";
    if (entry.ORGANIZATION) {
      pubJ = entry.ORGANIZATION;
    }
    if (entry.LOCATION) {
      pubJ = pubJ + ". " + entry.LOCATION;
    }

    var jornalinfo = pubJ;
    if (typeof entry.MONTH !== "undefined") {
      jornalinfo = jornalinfo + ", " + entry.MONTH;
    }
    if (typeof entry.YEAR !== "undefined") {
      jornalinfo = jornalinfo + ", " + entry.YEAR + ". ";
    }
    var journalstr = doc.splitTextToSize(jornalinfo, 42);
    doc.text(journalstr, 4, mrgtop);
    mrgtop = mrgtop + 1.2 * journalstr.length + 0.5;
  }

  doc.output("save", "CV - Yukun Guo.pdf");
  // const { userAgent } = navigator;
  // if (userAgent.includes('Windows')) {
  //     window.open(doc.output('bloburl'))
  // } else {
  //     doc.output('save', 'CV - Yukun Guo.pdf');
  // }
}

function spraseAuthor(authors) {
  var auths = authors.split(" and ");
  var authstr = "";
  for (let i = 0; i < auths.length; i++) {
    var auth = auths[i];
    var tmpau = "";
    if (auth.includes(",")) {
      var au = auth.split(",");
      tmpau = au.reverse().join(" ");
    } else {
      tmpau = auth;
    }

    if (i == auths.length - 1) {
      authstr = authstr + " and " + tmpau;
    } else {
      authstr = authstr + ", " + tmpau;
    }
  }

  return authstr.slice(2, authstr.length);
}
