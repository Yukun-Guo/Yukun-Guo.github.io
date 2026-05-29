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
    "2022.3 - 2026.6  Ph.D. Biomedical Engineering, Oregon Health & Science University, Portland OR, U.S."
  );
  doc.text(
    4,
    17.3,
    "2014.9 - 2017.6  M.S.  Computer Science and Technology, University of Jinan, Jinan, China"
  );
  doc.text(
    4,
    18.6,
    "2009.9 - 2013.6  B.S.   Computer Science and Technology, University of Jinan, Jinan, China"
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
    "2019.1 - 2022.3     Research assistant   Casey Eye Institute, OHSU, Portland OR, U.S."
  );
  doc.text(
    4,
    24.3,
    "2017.4 - 2019.1     Visiting scholar       Casey Eye Institute, OHSU, Portland OR, U.S."
  );

  // add patents
  var mrgtop = 28.8;
  mrgtop = formatPatentList(entriesArrayPatent,"INTELLECTUAL PROPERTY",doc,mrgtop);

  // add awards
  mrgtop = formatAwardList(entriesArrayAward,"ACADEMIC AWARDS",doc,mrgtop);

  // add papers (NLM format)
  mrgtop = formatNLMList(entriesArrayPaper,"PEER-REVIEWED JOURNAL PAPERS", doc, mrgtop, personName);

  // add conference papers (NLM format)
  mrgtop = formatNLMList(entriesArrayConferencePaper,"PEER-REVIEWED CONFERENCE PAPERS", doc, mrgtop, personName);

  // add preprints
  mrgtop = formatNLMList(entriesArrayPreprint, "PREPRINTS", doc, mrgtop, personName);

  // add abstracts (NLM format)
  mrgtop = formatNLMList(entriesArrayConferenceAbstract, "CONFERENCE ABSTRACTS", doc, mrgtop, personName);
  
  // add conference presentations
  mrgtop = formatNLMList(entriesArrayConferencePresentation, "CONFERENCE PRESENTATIONS", doc, mrgtop, personName);

  // add book chapters
  mrgtop = formatNLMList(entriesArrayBookChapters, "BOOK CHAPTERS", doc, mrgtop, personName);


  var dateStr = new Date().toLocaleDateString('en-us', { year:"numeric", month:"short"});
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

/**
 * Convert a full name ("Yukun Guo" or "Guo, Yukun") to NLM abbreviation ("Guo Y").
 */
function nameToNLM(fullName) {
  var parts = fullName.trim().split(",");
  if (parts.length > 1) {
    var last = parts[0].trim();
    var firstParts = parts[1].trim().split(/\s+/).filter(function(n){ return n.length > 0; });
    var initials = firstParts.map(function(n){ return n[0].toUpperCase(); }).join("");
    return last + " " + initials;
  } else {
    var words = fullName.trim().split(/\s+/).filter(function(n){ return n.length > 0; });
    if (words.length > 1) {
      var last = words[words.length - 1];
      var initials = words.slice(0, -1).map(function(n){ return n[0].toUpperCase(); }).join("");
      return last + " " + initials;
    }
    return fullName;
  }
}

/**
 * Format a BibTeX author string in NLM style: "Last FM, Last FM, ..."
 * Input: "Last, First Middle and First Last and ..."
 */
function spraseAuthorNLM(authors) {
  var auths = authors.split(" and ");
  var parts = [];
  for (var i = 0; i < auths.length; i++) {
    var auth = auths[i].trim();
    var formatted = "";
    if (auth.includes(",")) {
      var au = auth.split(",");
      var last = au[0].trim();
      var firstMiddle = au[1].trim();
      var names = firstMiddle.split(/\s+/).filter(function(n){ return n.length > 0; });
      var initials = names.map(function(n){ return n[0].toUpperCase(); }).join("");
      formatted = last + " " + initials;
    } else {
      var words = auth.split(/\s+/).filter(function(n){ return n.length > 0; });
      if (words.length > 1) {
        var last = words[words.length - 1];
        var initials = words.slice(0, -1).map(function(n){ return n[0].toUpperCase(); }).join("");
        formatted = last + " " + initials;
      } else {
        formatted = auth;
      }
    }
    parts.push(formatted);
  }
  return parts.join(", ");
}

/**
 * Strip URL prefixes from a DOI field so only the bare DOI remains.
 * e.g. "https://doi.org/10.1234/abc" → "10.1234/abc"
 */
function cleanDOI(doi) {
  if (!doi) return doi;
  return doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, "").trim();
}

/**
 * Render an array of styled spans as one continuous flowing paragraph.
 * Each span: { text, font, color:[r,g,b], url? }
 * Words wrap at rightX; page breaks are inserted when y > 60.
 * Returns the y coordinate at the start of the next line after all spans.
 */
function renderCitationSpans(doc, spans, leftX, rightX, startY, lineHeight) {
  var x = leftX;
  var y = startY;
  for (var si = 0; si < spans.length; si++) {
    var span = spans[si];
    var tokens = (span.text || "").match(/\S+\s*/g);
    if (!tokens) continue;
    for (var ti = 0; ti < tokens.length; ti++) {
      doc.setFont("times", span.font || "normal");
      var token = tokens[ti];
      var tw = doc.getTextWidth(token);
      // Wrap if this token would exceed the right margin (never wrap at leftX)
      if (x > leftX && x + tw > rightX) {
        y += lineHeight;
        x = leftX;
        if (y > 60) { doc.addPage("A4"); y = 6; }
        token = token.replace(/^\s+/, "");
        if (!token) continue;
        tw = doc.getTextWidth(token);
      }
      doc.setTextColor(span.color[0], span.color[1], span.color[2]);
      if (span.url) {
        doc.textWithLink(token, x, y, { url: span.url });
      } else {
        doc.text(token, x, y);
      }
      x += tw;
    }
  }
  return y + lineHeight;
}

/**
 * Format a list of entries using the National Library of Medicine (NLM) citation style.
 * All parts (authors · title · journal info) flow as one continuous paragraph.
 * Order: N. Authors. Title. Journal. YYYY Mon;Vol(Issue):Pages. doi:DOI. PMID:PMID.
 */
function formatNLMList(elementArray, sectionTitle, doc, mrgtop, personName) {
  if (elementArray.length == 0) return mrgtop;

  mrgtop = mrgtop + 1;
  doc.setTextColor(0, 0, 0);
  doc.setFont("times", "bold");
  doc.setFontSize(12);
  doc.text(4, mrgtop, sectionTitle);
  doc.line(4, mrgtop + 0.5, 46, mrgtop + 0.5);
  mrgtop = mrgtop + 2;
  doc.setFontSize(11);

  var personNameNLM = nameToNLM(personName); // e.g. "Guo Y"

  for (var i = 0; i < elementArray.length; i++) {
    var entry = elementArray[i];
    if (mrgtop > 60) { doc.addPage("A4"); mrgtop = 6; }

    var spans = [];

    // --- 1. Authors (number prefix + NLM authors, personName bolded inline) ---
    var nlmAuthors = spraseAuthorNLM(entry.AUTHOR || "");
    var fullAuth = (i + 1).toString() + ". " + nlmAuthors + ". ";
    var authParts = fullAuth.split(personNameNLM);
    for (var ap = 0; ap < authParts.length; ap++) {
      if (authParts[ap]) spans.push({ text: authParts[ap], font: "normal", color: [0, 0, 0] });
      if (ap < authParts.length - 1) spans.push({ text: personNameNLM, font: "bold", color: [0, 0, 0] });
    }

    // --- 2. Title (bold blue, hyperlinked) ---
    var doi = cleanDOI(entry.DOI);
    var url = entry.URL || (doi ? "http://dx.doi.org/" + doi : null);
    var titleText = entry.TITLE.replace(/\{/g, "").replace(/\}/g, "") + ". ";
    spans.push({ text: titleText, font: "bold", color: [50, 150, 250], url: url });

    // --- 3. Journal/venue info (italic black) ---
    var journalInfo = "";
    if (entry.JOURNAL)          journalInfo += entry.JOURNAL;
    else if (entry.BOOKTITLE)   journalInfo += "In " + entry.BOOKTITLE;
    else if (entry.ORGANIZATION) journalInfo += entry.ORGANIZATION;
    if (entry.YEAR)   journalInfo += ". " + entry.YEAR;
    if (entry.MONTH)  journalInfo += " " + entry.MONTH;
    if (entry.VOLUME) journalInfo += ";" + entry.VOLUME;
    if (entry.NUMBER) journalInfo += "(" + entry.NUMBER + ")";
    if (entry.PAGES)  journalInfo += ":" + entry.PAGES.replace(/--/g, "-");
    journalInfo += ".";
    if (doi)         journalInfo += " doi: " + doi + ".";
    if (entry.PMID)  journalInfo += " PMID: " + entry.PMID + ".";
    spans.push({ text: journalInfo, font: "italic", color: [0, 0, 0] });

    // Render all three parts as one flowing paragraph
    mrgtop = renderCitationSpans(doc, spans, 4, 46, mrgtop, 1.2);
    mrgtop += 0.5; // gap between entries
  }
  return mrgtop;
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

// ─────────────────────────────────────────────────────────────
// Papers-Only CV  (full CV minus CONFERENCE ABSTRACTS)
// ─────────────────────────────────────────────────────────────
function generatePapersOnlyCV(personName) {
  var bibParser = new BibtexParser();
  var bibdisp   = new BibtexDisplay();
  bibParser.setInput(g_bibstring);
  try {
    bibParser.bibtex();
  } catch (e) {
    bibParser.errorThrown(e);
    console.error(e);
  }
  var entries = bibParser.getEntries();
  var entriesArrayPaper = [], entriesArrayPatent = [], entriesArrayAward = [];
  var entriesArrayConferencePresentation = [], entriesArrayConferencePaper = [];
  var entriesArrayPreprint = [], entriesArrayBookChapters = [], entriesArrayTechnicalReport = [];
  var entriesArrayOther = [];

  for (var entryKey in entries) {
    switch (entries[entryKey].BIBTEXTYPEKEY) {
      case "PATENT":        entriesArrayPatent.push(entries[entryKey]); break;
      case "AWARD":         entriesArrayAward.push(entries[entryKey]); break;
      case "CONFERENCEPRE": entriesArrayConferencePresentation.push(entries[entryKey]); break;
      case "INPROCEEDINGS": entriesArrayConferencePaper.push(entries[entryKey]); break;
      case "ARTICLE":       entriesArrayPaper.push(entries[entryKey]); break;
      case "PREPRINT":      entriesArrayPreprint.push(entries[entryKey]); break;
      case "INBOOK":        entriesArrayBookChapters.push(entries[entryKey]); break;
      case "TECHREPORT":    entriesArrayTechnicalReport.push(entries[entryKey]); break;
      // CONFERENCEABS intentionally skipped
      default:              entriesArrayOther.push(entries[entryKey]); break;
    }
  }
  entriesArrayPaper               = bibdisp.sortArray(entriesArrayPaper,               "DATE", "DESC", "date");
  entriesArrayAward               = bibdisp.sortArray(entriesArrayAward,               "DATE", "DESC", "date");
  entriesArrayPatent              = bibdisp.sortArray(entriesArrayPatent,              "DATE", "DESC", "date");
  entriesArrayConferencePresentation = bibdisp.sortArray(entriesArrayConferencePresentation, "DATE", "DESC", "date");
  entriesArrayConferencePaper     = bibdisp.sortArray(entriesArrayConferencePaper,     "DATE", "DESC", "date");
  entriesArrayPreprint            = bibdisp.sortArray(entriesArrayPreprint,            "DATE", "DESC", "date");
  entriesArrayBookChapters        = bibdisp.sortArray(entriesArrayBookChapters,        "DATE", "DESC", "date");

  var doc = new window.jspdf.jsPDF("p", "em", "A4");

  // ── Header (identical to full CV) ──
  doc.setFontSize(18);
  doc.setFont("times", "bold");
  doc.text("Yukun Guo", 20, 5);

  doc.setFont("times", "normal");
  doc.setFontSize(11);
  doc.text(4, 7,     doc.splitTextToSize("Department of Ophthalmology and Biomedical Engineering", 27));
  doc.text(4, 8.25,  doc.splitTextToSize("School of Medicine, Oregon Health & Science University (OHSU) ", 27));
  doc.text(4, 9.5,   doc.splitTextToSize("515 Southwest Campus Drive", 19));
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
  doc.text(4, 16,   "2022.3 - 2026.6  Ph.D. Biomedical Engineering, Oregon Health & Science University, Portland OR, U.S.");
  doc.text(4, 17.3, "2017.9 - 2019.6  M.S.  Computer Science and Technology, University of Jinan, Jinan, China");
  doc.text(4, 18.6, "2013.9 - 2017.6  B.S.   Computer Science and Technology, University of Jinan, Jinan, China");

  doc.setTextColor(0, 0, 0);
  doc.setFont("times", "bold");
  doc.setFontSize(12);
  doc.text(4, 21, "PROFESSIONAL POSITIONS");
  doc.line(4, 21.5, 46, 21.5);
  doc.setFontSize(11);
  doc.setFont("times", "normal");
  doc.text(4, 23,   "2019.1 - 2022.3     Research assistant   Casey Eye Institute, OHSU, Portland OR, U.S.");
  doc.text(4, 24.3, "2017.4 - 2019.1     Visiting scholar       Casey Eye Institute, OHSU, Portland OR, U.S.");

  var mrgtop = 28.8;
  mrgtop = formatPatentList(entriesArrayPatent, "INTELLECTUAL PROPERTY", doc, mrgtop);
  mrgtop = formatAwardList(entriesArrayAward, "ACADEMIC AWARDS", doc, mrgtop);
  mrgtop = formatNLMList(entriesArrayPaper,           "PEER-REVIEWED JOURNAL PAPERS",   doc, mrgtop, personName);
  mrgtop = formatNLMList(entriesArrayConferencePaper, "PEER-REVIEWED CONFERENCE PAPERS", doc, mrgtop, personName);
  mrgtop = formatNLMList(entriesArrayPreprint,        "PREPRINTS",                        doc, mrgtop, personName);
  // CONFERENCE ABSTRACTS and CONFERENCE PRESENTATIONS omitted
  mrgtop = formatNLMList(entriesArrayBookChapters,    "BOOK CHAPTERS",                   doc, mrgtop, personName);

  var dateStr = new Date().toLocaleDateString("en-us", { year: "numeric", month: "short" });
  doc.output("save", "Papers - Yukun Guo - " + dateStr + ".pdf");
}

// ─────────────────────────────────────────────────────────────
// CV dropdown menu helpers (pure vanilla JS, no Bootstrap Popper needed)
// ─────────────────────────────────────────────────────────────

function toggleCVMenu(e) {
  e.preventDefault();
  e.stopPropagation();
  var menu = document.getElementById("cv-menu");
  if (!menu) return;
  menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
}

function closeCVMenu() {
  var menu = document.getElementById("cv-menu");
  if (menu) menu.style.display = "none";
}

// Close the CV menu when clicking anywhere outside it
document.addEventListener("click", function (e) {
  var container = document.getElementById("cv-dropdown-container");
  if (container && !container.contains(e.target)) {
    closeCVMenu();
  }
});

// ─────────────────────────────────────────────────────────────
// Download Bibs + Cite helpers
// ─────────────────────────────────────────────────────────────

/** Show a transient status banner in the publications section. */
function showRefreshStatus(message, type) {
  var el = document.getElementById("refresh-status");
  if (!el) return;
  var colorMap = { success: "#198754", info: "#0d6efd", error: "#dc3545", loading: "#6c757d" };
  el.style.display = "block";
  el.style.color = colorMap[type] || "#333";
  el.textContent = message;
  if (type !== "loading") {
    setTimeout(function () { el.style.display = "none"; }, 5000);
  }
}

// ── Citation download dropdown ───────────────────────────────────────────────

/** Toggle the Download Citation dropdown menu. */
function toggleCitationMenu(e) {
  e.stopPropagation();
  var menu = document.getElementById("citation-menu");
  if (!menu) return;
  if (menu.style.display !== "none") {
    closeCitationMenu();
  } else {
    menu.style.display = "block";
    document.addEventListener("click", closeCitationMenu, { once: true });
  }
}

/** Close the Download Citation dropdown menu. */
function closeCitationMenu() {
  var menu = document.getElementById("citation-menu");
  if (menu) menu.style.display = "none";
}

/**
 * Download all citations in the requested format.
 * @param {string} format  'nlm' | 'bibtex' | 'ris' | 'html' | 'text'
 */
function downloadAllCitations(format) {
  closeCitationMenu();
  var bibText = window.g_bibstring;
  if (!bibText) {
    showRefreshStatus("Publications not loaded yet \u2014 please wait and try again.", "error");
    return;
  }

  var fileContent, fileName, mimeType;

  if (format === "bibtex") {
    fileContent = bibText;
    fileName    = "publications.bib";
    mimeType    = "text/plain;charset=utf-8";
  } else {
    // Parse entries once for all non-raw formats
    var parser = new BibtexParser();
    parser.setInput(bibText);
    try { parser.bibtex(); } catch (e) { /* ignore parse errors */ }
    var entries = parser.getEntries();

    switch (format) {
      case "ris":
        fileContent = _fmtRIS(entries);
        fileName    = "citations.ris";
        mimeType    = "application/x-research-info-systems;charset=utf-8";
        break;
      case "html":
        fileContent = _fmtHTMLCitations(entries);
        fileName    = "citations.html";
        mimeType    = "text/html;charset=utf-8";
        break;
      case "text":
        fileContent = _fmtPlainText(entries);
        fileName    = "citations.txt";
        mimeType    = "text/plain;charset=utf-8";
        break;
      case "nlm":
      default:
        fileContent = _fmtNLM(entries);
        fileName    = "citations_nlm.txt";
        mimeType    = "text/plain;charset=utf-8";
        break;
    }
  }

  var blob = new Blob([fileContent], { type: mimeType });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  showRefreshStatus(fileName + " downloaded.", "success");
}

// ── Format helpers ────────────────────────────────────────────────────────────

/**
 * Return entries as an array sorted by year DESC, then month DESC.
 */
function _sortedEntries(entries) {
  var monthNum = {
    jan:1, feb:2, mar:3, apr:4, may:5,  jun:6,
    jul:7, aug:8, sep:9, oct:10, nov:11, dec:12
  };
  return Object.keys(entries).map(function (k) { return entries[k]; }).sort(function (a, b) {
    var ya = parseInt(a.YEAR || "0", 10);
    var yb = parseInt(b.YEAR || "0", 10);
    if (ya !== yb) return yb - ya;
    var ma = monthNum[(a.MONTH || "").toLowerCase().slice(0, 3)] || 0;
    var mb = monthNum[(b.MONTH || "").toLowerCase().slice(0, 3)] || 0;
    return mb - ma;
  });
}

/**
 * NLM numbered bibliography (Vancouver style).
 * e.g.  1. Guo Y, Smith J. Title. J Name. 2023;10(2):15-22. doi:10.1000/xyz.
 */
function _fmtNLM(entries) {
  var lines  = [];
  var sorted = _sortedEntries(entries);
  for (var i = 0; i < sorted.length; i++) {
    var e   = sorted[i];
    var au  = spraseAuthorNLM(e.AUTHOR || "");
    var ti  = (e.TITLE || "").replace(/\{/g, "").replace(/\}/g, "");
    var doi = cleanDOI(e.DOI);

    var venue = "";
    if (e.JOURNAL)           venue = e.JOURNAL;
    else if (e.BOOKTITLE)    venue = "In " + e.BOOKTITLE.replace(/\{/g, "").replace(/\}/g, "");
    else if (e.ORGANIZATION) venue = e.ORGANIZATION;

    var jInfo = venue;
    if (e.YEAR)   jInfo += ". " + e.YEAR;
    if (e.MONTH)  jInfo += " " + e.MONTH;
    if (e.VOLUME) jInfo += ";" + e.VOLUME;
    if (e.NUMBER) jInfo += "(" + e.NUMBER + ")";
    if (e.PAGES)  jInfo += ":" + e.PAGES.replace(/--/g, "-");
    jInfo += ".";
    if (doi)    jInfo += " doi: " + doi + ".";
    if (e.PMID) jInfo += " PMID: " + e.PMID + ".";

    lines.push((i + 1) + ". " + au + ". " + ti + ". " + jInfo);
  }
  return lines.join("\n\n");
}

/**
 * RIS format for Endnote / Mendeley / Zotero import.
 */
function _fmtRIS(entries) {
  var risTypeMap = {
    "ARTICLE":       "JOUR",
    "INPROCEEDINGS": "CONF",
    "CONFERENCEPRE": "CONF",
    "CONFERENCEABS": "CONF",
    "PREPRINT":      "JOUR",
    "INBOOK":        "CHAP",
    "TECHREPORT":    "RPRT",
    "PATENT":        "PAT"
  };

  var lines  = [];
  var sorted = _sortedEntries(entries);
  for (var ri = 0; ri < sorted.length; ri++) {
    var e       = sorted[ri];
    var risType = risTypeMap[(e.BIBTEXTYPEKEY || "").toUpperCase()] || "GEN";

    lines.push("TY  - " + risType);

    // Authors: split on " and " and keep raw BibTeX name for Endnote
    var auStr = (e.AUTHOR || "").replace(/\{/g, "").replace(/\}/g, "");
    auStr.split(/\s+and\s+/i).forEach(function (au) {
      au = au.trim();
      if (au) lines.push("AU  - " + au);
    });

    if (e.TITLE)      lines.push("TI  - " + e.TITLE.replace(/\{/g, "").replace(/\}/g, ""));
    if (e.JOURNAL)    lines.push("JO  - " + e.JOURNAL);
    if (e.BOOKTITLE)  lines.push("BT  - " + e.BOOKTITLE.replace(/\{/g, "").replace(/\}/g, ""));
    if (e.YEAR)       lines.push("PY  - " + e.YEAR);
    if (e.VOLUME)     lines.push("VL  - " + e.VOLUME);
    if (e.NUMBER)     lines.push("IS  - " + e.NUMBER);
    if (e.PAGES) {
      var pp = e.PAGES.replace(/\{/g, "").replace(/\}/g, "").split(/--|-/);
      lines.push("SP  - " + pp[0].trim());
      if (pp[1]) lines.push("EP  - " + pp[1].trim());
    }
    if (e.ABSTRACT)  lines.push("AB  - " + e.ABSTRACT.replace(/\{/g, "").replace(/\}/g, ""));
    if (e.KEYWORDS)  lines.push("KW  - " + e.KEYWORDS.replace(/\{/g, "").replace(/\}/g, ""));
    if (e.DOI)       lines.push("DO  - " + cleanDOI(e.DOI));
    if (e.PMID)      lines.push("AN  - " + e.PMID);
    if (e.URL)       lines.push("UR  - " + e.URL);
    lines.push("ER  - ");
    lines.push("");
  }
  return lines.join("\r\n");
}

/**
 * Self-contained HTML file with a styled numbered publication list.
 */
function _fmtHTMLCitations(entries) {
  var items  = [];
  var sorted = _sortedEntries(entries);
  for (var hi = 0; hi < sorted.length; hi++) {
    var e   = sorted[hi];
    var au  = spraseAuthorNLM(e.AUTHOR || "");
    var ti  = (e.TITLE || "").replace(/\{/g, "").replace(/\}/g, "");
    var doi = cleanDOI(e.DOI);

    var venue = "";
    if (e.JOURNAL)           venue = "<em>" + e.JOURNAL + "</em>";
    else if (e.BOOKTITLE)    venue = "In <em>" + e.BOOKTITLE.replace(/\{/g, "").replace(/\}/g, "") + "</em>";
    else if (e.ORGANIZATION) venue = e.ORGANIZATION;

    var line = "<span class=\"authors\">" + au + ".</span> ";
    line    += "<span class=\"title\">" + ti + ".</span> ";
    if (venue) line += venue + ". ";
    if (e.YEAR)   line += e.YEAR;
    if (e.MONTH)  line += " " + e.MONTH;
    if (e.VOLUME) line += ";" + e.VOLUME;
    if (e.NUMBER) line += "(" + e.NUMBER + ")";
    if (e.PAGES)  line += ":" + e.PAGES.replace(/--/g, "-");
    line += ".";
    if (doi) {
      line += " doi: <a href=\"https://doi.org/" + doi + "\">" + doi + "</a>.";
    }
    if (e.PMID) line += " PMID: " + e.PMID + ".";

    items.push("    <li>" + line + "</li>");
  }

  return [
    "<!DOCTYPE html>",
    "<html lang=\"en\">",
    "<head>",
    "  <meta charset=\"UTF-8\">",
    "  <title>Publications</title>",
    "  <style>",
    "    body { font-family: Arial, sans-serif; max-width: 860px; margin: 40px auto; font-size: 14px; line-height: 1.7; color: #333; }",
    "    h2   { border-bottom: 2px solid #0075bd; padding-bottom: 6px; }",
    "    ol   { padding-left: 22px; }",
    "    li   { margin-bottom: 10px; }",
    "    .title   { font-weight: bold; }",
    "    a    { color: #0075bd; }",
    "  </style>",
    "</head>",
    "<body>",
    "<h2>Publications</h2>",
    "<ol>",
    items.join("\n"),
    "</ol>",
    "</body>",
    "</html>"
  ].join("\n");
}

/**
 * Simple plain-text list — one block per entry, easy to copy-paste into
 * word processors or spreadsheets.
 * Format:  Author List (Year). Title. Venue. Pages. DOI.
 */
function _fmtPlainText(entries) {
  var lines  = [];
  var sorted = _sortedEntries(entries);
  for (var pi = 0; pi < sorted.length; pi++) {
    var e   = sorted[pi];
    var au  = spraseAuthorNLM(e.AUTHOR || "");
    var ti  = (e.TITLE || "").replace(/\{/g, "").replace(/\}/g, "");
    var doi = cleanDOI(e.DOI);

    var venue = "";
    if (e.JOURNAL)           venue = e.JOURNAL;
    else if (e.BOOKTITLE)    venue = e.BOOKTITLE.replace(/\{/g, "").replace(/\}/g, "");
    else if (e.ORGANIZATION) venue = e.ORGANIZATION;

    var parts = [];
    if (au) parts.push(au + (e.YEAR ? " (" + e.YEAR + ")" : ""));
    if (ti) parts.push(ti);
    var venueDetail = venue;
    if (e.VOLUME) venueDetail += " " + e.VOLUME;
    if (e.NUMBER) venueDetail += "(" + e.NUMBER + ")";
    if (e.PAGES)  venueDetail += ":" + e.PAGES.replace(/--/g, "-");
    if (venueDetail.trim()) parts.push(venueDetail.trim());
    if (doi)    parts.push("doi:" + doi);
    if (e.PMID) parts.push("PMID:" + e.PMID);

    lines.push(parts.join(". ") + ".");
  }
  return lines.join("\n\n");
}

/**
 * Fallback clipboard copy for browsers without navigator.clipboard.
 */
function _fallbackCopy(text) {
  var ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand("copy"); } catch (e) { /* silent */ }
  document.body.removeChild(ta);
}

/**
 * Copy the NLM-formatted citation of a publication to the clipboard.
 * Called by the [Cite] button; reads raw BibTeX from the .bibtexraw span
 * in the same list item, parses it, and formats it in NLM style.
 */
function copyCiteNLM(btn) {
  var rawBib = $(btn).closest("li").find(".bibtexraw").text().trim();
  if (!rawBib) return;

  var parser = new BibtexParser();
  parser.setInput(rawBib);
  try { parser.bibtex(); } catch (e) { /* ignore */ }
  var entries = parser.getEntries();
  var keys = Object.keys(entries);
  if (!keys.length) return;
  var entry = entries[keys[0]];

  // Build NLM citation (reuses helpers already defined in this file)
  var authors = spraseAuthorNLM(entry.AUTHOR || "");
  var title   = (entry.TITLE || "").replace(/\{/g, "").replace(/\}/g, "");
  var doi     = cleanDOI(entry.DOI);

  var venue = "";
  if (entry.JOURNAL)           venue = entry.JOURNAL;
  else if (entry.BOOKTITLE)    venue = "In " + entry.BOOKTITLE;
  else if (entry.ORGANIZATION) venue = entry.ORGANIZATION;

  var journalInfo = venue;
  if (entry.YEAR)   journalInfo += ". " + entry.YEAR;
  if (entry.MONTH)  journalInfo += " " + entry.MONTH;
  if (entry.VOLUME) journalInfo += ";" + entry.VOLUME;
  if (entry.NUMBER) journalInfo += "(" + entry.NUMBER + ")";
  if (entry.PAGES)  journalInfo += ":" + entry.PAGES.replace(/--/g, "-");
  journalInfo += ".";
  if (doi)         journalInfo += " doi: " + doi + ".";
  if (entry.PMID)  journalInfo += " PMID: " + entry.PMID + ".";

  var citation = authors + ". " + title + ". " + journalInfo;

  function showFeedback() {
    var orig = btn.textContent;
    btn.textContent = "[Copied!]";
    btn.style.color = "#198754";
    setTimeout(function () { btn.textContent = orig; btn.style.color = ""; }, 1800);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(citation).then(showFeedback).catch(function () {
      _fallbackCopy(citation); showFeedback();
    });
  } else {
    _fallbackCopy(citation); showFeedback();
  }
}