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
  var entriesArrayConferenceAbstract = [];
  var entriesArrayConferencePaper = [];
  var entriesArrayPreprint = [];
  var entriesArrayBookChapters = [];
  var entriesArrayTechnicalReport = [];
  var entriesArrayOther = [];
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
      case "CONFERENCEABS":
        entriesArrayConferenceAbstract.push(entries[entryKey]);
        break;
      case "INPROCEEDINGS":
        entriesArrayConferencePaper.push(entries[entryKey]);
        break;
      case "ARTICLE":
        entriesArrayPaper.push(entries[entryKey]);
        break;
      case "PREPRINT":
        entriesArrayPreprint.push(entries[entryKey]);
        break;
      case "INBOOK":
        entriesArrayBookChapters.push(entries[entryKey]);
        break;
      case "TECHREPORT":
        entriesArrayTechnicalReport.push(entries[entryKey]);
        break;
      default:
        entriesArrayOther.push(entries[entryKey]);
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
  entriesArrayConferenceAbstract = bibdisp.sortArray(
    entriesArrayConferenceAbstract,
    "DATE",
    "DESC",
    "date"
  );
  entriesArrayConferencePaper = bibdisp.sortArray(
    entriesArrayConferencePaper,
    "DATE",
    "DESC",
    "date"
  );
  entriesArrayPreprint = bibdisp.sortArray(
    entriesArrayPreprint,
    "DATE",
    "DESC",
    "date"
  );
  entriesArrayOther = bibdisp.sortArray(
    entriesArrayOther,
    "DATE",
    "DESC",
    "date"
  );
  entriesArrayBookChapters = bibdisp.sortArray(
    entriesArrayBookChapters,
    "DATE",
    "DESC",
    "date"
  );
  entriesArrayTechnicalReport = bibdisp.sortArray(
    entriesArrayTechnicalReport,
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
  doc.setFontSize(11);
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
  doc.text(31.7, 8.25, "Website:");
  doc.setTextColor(0, 0, 255);
  doc.text(35.5, 8.25, "https://bit.ly/profile-yukun");

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
  doc.setFontSize(12);
  doc.text(4, 14, "EDUCATION");
  doc.line(4, 14.5, 46, 14.5);
  doc.setFontSize(11);
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
  doc.setFontSize(12);
  doc.text(4, 21, "PROFESSIONAL POSITIONS");
  doc.line(4, 21.5, 46, 21.5);
  doc.setFontSize(11);
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
  var mrgtop = 28.8;
  mrgtop = formatPatentList(entriesArrayPatent,"INTELLECTUAL PROPERTY",doc,mrgtop);

  // add awards
  mrgtop = formatAwardList(entriesArrayAward,"ACADEMIC AWARDS",doc,mrgtop);

  // add papers
  mrgtop = formatList(entriesArrayPaper,"PEER-REVIEWED JOURNAL PAPERS", doc, mrgtop, personName);

  // add conference papers
  mrgtop = formatList(entriesArrayConferencePaper,"PEER-REVIEWED CONFERENCE PAPERS", doc, mrgtop, personName);

  // add preprints
  mrgtop = formatList(entriesArrayPreprint, "PREPRINTS", doc, mrgtop, personName);

  // add abstracts
  mrgtop = formatList(entriesArrayConferenceAbstract, "CONFERENCE ABSTRACTS", doc, mrgtop, personName);
  
  // add conference presentations
  mrgtop = formatList(entriesArrayConferencePresentation, "CONFERENCE PRESENTATIONS", doc, mrgtop, personName);

  // add book chapters
  mrgtop = formatList(entriesArrayBookChapters, "BOOK CHAPTERS", doc, mrgtop, personName);


  var dateStr =new Date().toLocaleDateString('en-us', { year:"numeric", month:"short"});
  doc.output("save", `CV - Yukun Guo - ${dateStr}.pdf`);
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

function formatList(elementArray, sectionTitle, doc, mrgtop, personName){
  if (elementArray.length == 0) {
    return mrgtop;
  }
  mrgtop = mrgtop + 1;
  doc.setTextColor(0, 0, 0);
  doc.setFont("times", "bold");
  doc.setFontSize(12);
  doc.text(4, mrgtop, sectionTitle);
  doc.line(4, mrgtop + 0.5, 46, mrgtop + 0.5);
  mrgtop = mrgtop + 2;
  doc.setFont("times", "normal");
  doc.setFontSize(11);
  for (let i = 0; i < elementArray.length; i++) {
    var entry = elementArray[i];
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
          url: "http://dx.doi.org/" + entry.DOI,
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
    } else if (entry.ORGANIZATION) {
      var pubJ = entry.ORGANIZATION;
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
  return mrgtop;
}

function formatAwardList(elementArray,sectionTitle,doc,mrgtop){
  if (elementArray.length == 0) {
    return mrgtop;
  }
  mrgtop = mrgtop + 1;
  doc.setTextColor(0, 0, 0);
  doc.setFont("times", "bold");
  doc.setFontSize(12);
  doc.text(4, mrgtop, sectionTitle);
  doc.line(4, mrgtop + 0.5, 46, mrgtop + 0.5);
  doc.setFontSize(11);
  mrgtop = mrgtop + 2;
  doc.setFont("times", "normal");
  for (let i = 0; i < elementArray.length; i++) {
    var entry = elementArray[i];
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
          url: "http://dx.doi.org/" + entry.DOI,
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
  return mrgtop;
}

function formatPatentList(elementArray,sectionTitle,doc,mrgtop){
  if (elementArray.length == 0) {
    return mrgtop;
  }
  doc.setTextColor(0, 0, 0);
  doc.setFont("times", "bold");
  doc.setFontSize(12);
  doc.text(4, 27, sectionTitle);
  doc.line(4, 27.5, 46, 27.5);
  doc.setFontSize(11);
  doc.setFont("times", "normal");
  for (let i = 0; i < elementArray.length; i++) {
    var entry = elementArray[i];
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
          url: "http://dx.doi.org/" + entry.DOI,
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
  return mrgtop;
}