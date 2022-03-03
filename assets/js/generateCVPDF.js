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
    for (var entryKey in entries) {
        switch (entries[entryKey].BIBTEXTYPEKEY) {
            case 'PATENT':
                entriesArrayPatent.push(entries[entryKey]);
                break;
            case 'AWARD':
                entriesArrayAward.push(entries[entryKey]);
                break;
            default:
                entriesArrayPaper.push(entries[entryKey]);
                break;
        }
    }
    entriesArrayPaper = bibdisp.sortArray(entriesArrayPaper, 'DATE', 'DESC', 'date');
    entriesArrayAward = bibdisp.sortArray(entriesArrayAward, 'DATE', 'DESC', 'date');
    entriesArrayPatent = bibdisp.sortArray(entriesArrayPatent, 'DATE', 'DESC', 'date');


    for (var entryKey in entriesArrayPaper) {
        var entry = entriesArrayPaper[entryKey];
    }
    // assemble PDF
    var doc = new window.jspdf.jsPDF('p', 'em', 'A4');

    // name
    doc.setFontSize(25);
    doc.setFont('times', 'bold');
    doc.text("Yukun Guo", 20, 5);

    doc.setFont('times', 'normal');
    doc.setFontSize(12);
    doc.text(4, 7, doc.splitTextToSize('Casey Eye Institute, Oregon Health & Science University (OHSU)', 20));
    doc.text(4, 9.6, doc.splitTextToSize('515 SW Campus Dr, Portland, OR 97239', 10));

    doc.text(24, 7, doc.splitTextToSize('Email:', 10));
    doc.setTextColor(0, 0, 255);
    doc.text(27, 7, doc.splitTextToSize('guoyu@ohsu.edu', 10));

    doc.setTextColor(0, 0, 0);
    doc.text(24, 9, 'Website:');
    doc.setTextColor(0, 0, 255);
    doc.text(28, 9, 'https://Yukun-Guo.github.io');

    doc.setTextColor(0, 0, 0);
    doc.text(24, 11, 'Google Scholar:');
    doc.setTextColor(0, 0, 255);
    doc.text(31, 11, 'https://bit.ly/scholar-Yukun-Guo');

    doc.setTextColor(0, 0, 0);
    doc.setFont('times', 'bold');
    doc.text(4, 14, 'EDUCATION');
    doc.line(4, 14.5, 46, 14.5);

    doc.setFont('times', 'normal');
    doc.text(4, 16, '2022-Present  Ph.D  Biomedical Engineering, Oregon Health & Science University, Portland OR, U.S.');
    doc.text(4, 17.3, '2017               M.S.  Computer Science and Technology, University of Jinan, Jinan, China');
    doc.text(4, 18.6, '2013               B.S.   Computer Science and Technology, University of Jinan, Jinan, China');

    doc.setTextColor(0, 0, 0);
    doc.setFont('times', 'bold');
    doc.text(4, 21, 'PROFESSIONAL POSITIONS');
    doc.line(4, 21.5, 46, 21.5);
    doc.setFont('times', 'normal');

    doc.text(4, 23, '2019-2022     Research assistant   Casey Eye Institute, OHSU, Portland OR, U.S.');
    doc.text(4, 24.3, '2017-2018     Visiting scholar       Casey Eye Institute, OHSU, Portland OR, U.S.');

    doc.setTextColor(0, 0, 0);
    doc.setFont('times', 'bold');
    doc.text(4, 27, 'INTELLECTUAL PROPERTY');
    doc.line(4, 27.5, 46, 27.5);
    var mrgtop = 28.8;

    doc.setFont('times', 'normal');
    for (let i = 0; i < entriesArrayPatent.length; i++) {
        var entry = entriesArrayPatent[i];
        if (mrgtop > 60) {
            doc.addPage('A4');
            mrgtop = 6;
        }
        doc.setFont('times', 'bold');
        doc.setTextColor(50, 150, 250);
        var titlestr = doc.splitTextToSize((i + 1).toString() + '. ' + entry.TITLE.replace('{', '').replace('}', ''), 42);
        for (var tstr in titlestr) {
            if (entry.URL) {
                doc.textWithLink(titlestr[tstr], 4, mrgtop, {
                    url: entry.URL
                });
            } else if (entry.DOI) {
                doc.textWithLink(titlestr[tstr], 4, mrgtop, {
                    url: 'http: //dx.doi.org/' + entry.DOI
                });
            } else {
                doc.text(titlestr[tstr], 4, mrgtop);
            }
            mrgtop = mrgtop + 1.2
        }

        doc.setFont('times', 'normal');
        doc.setTextColor(0);
        doc.text('   ' + spraseAuthor(entry.AUTHOR), 4, mrgtop);
        mrgtop = mrgtop + 1.2;
        doc.setTextColor(0);
        doc.setFont('times', 'italic');
        doc.text('    ' + entry.JOURNAL + ', ' + entry.YEAR, 4, mrgtop);
        mrgtop = mrgtop + 1.5;
    }

    mrgtop = mrgtop + 1
    doc.setTextColor(0, 0, 0);
    doc.setFont('times', 'bold');
    doc.text(4, mrgtop, 'ACADEMIC AWARDS');
    doc.line(4, mrgtop + 0.5, 46, mrgtop + 0.5);

    mrgtop = mrgtop + 2;
    doc.setFont('times', 'normal');
    for (let i = 0; i < entriesArrayAward.length; i++) {
        var entry = entriesArrayAward[i];
        if (mrgtop > 60) {
            doc.addPage('A4');
            mrgtop = 6;
        }
        doc.setFont('times', 'bold');
        doc.setTextColor(50, 150, 250);
        var titlestr = doc.splitTextToSize((i + 1).toString() + '. ' + entry.TITLE.replace('{', '').replace('}', ''), 42);
        for (var tstr in titlestr) {
            if (entry.URL) {
                doc.textWithLink(titlestr[tstr], 4, mrgtop, {
                    url: entry.URL
                });
            } else if (entry.DOI) {
                doc.textWithLink(titlestr[tstr], 4, mrgtop, {
                    url: 'http: //dx.doi.org/' + entry.DOI
                });
            } else {
                doc.text(titlestr[tstr], 4, mrgtop);
            }
            mrgtop = mrgtop + 1.2
        }
        doc.setFont('times', 'italic');
        doc.setTextColor(0);
        doc.text('    ' + entry.JOURNAL + ', ' + entry.YEAR, 4, mrgtop);
        mrgtop = mrgtop + 1.5;
    }

    mrgtop = mrgtop + 1;
    doc.setTextColor(0, 0, 0);
    doc.setFont('times', 'bold');
    doc.text(4, mrgtop, 'PEER REVIEWED JOURNAL PAPERS');
    doc.line(4, mrgtop + 0.5, 46, mrgtop + 0.5);

    mrgtop = mrgtop + 2;
    doc.setFont('times', 'normal');
    doc.setFontSize(11);
    for (let i = 0; i < entriesArrayPaper.length; i++) {
        var entry = entriesArrayPaper[i];
        if (mrgtop > 60) {
            doc.addPage('A4');
            mrgtop = 6;
        }
        doc.setFont('times', 'bold');
        doc.setTextColor(50, 150, 250);
        var titlestr = doc.splitTextToSize((i + 1).toString() + '. ' + entry.TITLE.replace('{', '').replace('}', ''), 42);
        for (var tstr in titlestr) {
            if (entry.URL) {
                doc.textWithLink(titlestr[tstr], 4, mrgtop, {
                    url: entry.URL
                });
            } else if (entry.DOI) {
                doc.textWithLink(titlestr[tstr], 4, mrgtop, {
                    url: 'http: //dx.doi.org/' + entry.DOI
                });
            } else {
                doc.text(titlestr[tstr], 4, mrgtop);
            }
            mrgtop = mrgtop + 1.2
        }

        doc.setFont('times', 'normal');
        doc.setTextColor(0);
        var authstr = doc.splitTextToSize(spraseAuthor(entry.AUTHOR), 42);
        doc.text(authstr, 4, mrgtop);
        mrgtop = mrgtop + 1.2 * authstr.length;

        doc.setTextColor(0);
        doc.setFont('times', 'italic');
        if (entry.JOURNAL) {
            var pubJ = entry.JOURNAL;
        } else if (entry.BOOKTITLE) {
            var pubJ = 'In ' + entry.BOOKTITLE;
        }

        var jornalinfo = pubJ;
        if (typeof entry.MONTH !== "undefined") {
            jornalinfo = jornalinfo + ', ' + entry.MONTH;
        }
        if (typeof entry.YEAR !== "undefined") {
            jornalinfo = jornalinfo + ', ' + entry.YEAR + '. ';
        }
        if (typeof entry.VOLUME !== "undefined") {
            jornalinfo = jornalinfo + entry.VOLUME;
        }
        if (typeof entry.NUMBER !== "undefined") {
            jornalinfo = jornalinfo + '(' + entry.NUMBER + ')';
        }
        if (typeof entry.PAGES !== "undefined") {
            jornalinfo = jornalinfo + ': ' + entry.PAGES + '.';
        }
        var journalstr = doc.splitTextToSize(jornalinfo, 42);
        doc.text(journalstr, 4, mrgtop);
        mrgtop = mrgtop + 1.2 * journalstr.length + 0.5;
    }
    doc.output('save', 'CV - Yukun Guo.pdf');
    // const { userAgent } = navigator;
    // if (userAgent.includes('Windows')) {
    //     window.open(doc.output('bloburl'))  
    // } else {
    //     doc.output('save', 'CV - Yukun Guo.pdf');
    // }  
}

function spraseAuthor(authors) {
    var auths = authors.split(' and ');
    var authstr = "";
    for (let i = 0; i < auths.length; i++) {
        var auth = auths[i];
        var tmpau = "";
        if (auth.includes(',')) {
            var au = auth.split(',');
            tmpau = au.reverse().join(' ');
        } else {
            tmpau = auth;
        }

        if (i == auths.length - 1) {
            authstr = authstr + ' and ' + tmpau;
        } else {
            authstr = authstr + ', ' + tmpau;
        }
    }

    return authstr.slice(2, authstr.length);
}