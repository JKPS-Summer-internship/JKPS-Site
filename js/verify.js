/* =============================================
   JKPS Solutions â€“ Certificate Verification
   verify.js
   ============================================= */

const CERT_DATA = {
  "EKX3CJ": { name: "Certificate Holder", programme: "Summer Internship 2026", duration: "8 Weeks", issueDate: "July 2026", fileReady: false },
  "GFUSB2": { name: "Certificate Holder", programme: "Summer Internship 2026", duration: "8 Weeks", issueDate: "July 2026", fileReady: false },
  "LDQTDF": { name: "Certificate Holder", programme: "Summer Internship 2026", duration: "8 Weeks", issueDate: "July 2026", fileReady: false },
  "D6NSUZ": { name: "Certificate Holder", programme: "Summer Internship 2026", duration: "8 Weeks", issueDate: "July 2026", fileReady: false },
  "SFLV4P": { name: "Certificate Holder", programme: "Summer Internship 2026", duration: "8 Weeks", issueDate: "July 2026", fileReady: false },
  "J8CFEB": { name: "Certificate Holder", programme: "Summer Internship 2026", duration: "8 Weeks", issueDate: "July 2026", fileReady: false },
  "EM7RB5": { name: "Certificate Holder", programme: "Summer Internship 2026", duration: "8 Weeks", issueDate: "July 2026", fileReady: false },
  "5HCXAP": { name: "Certificate Holder", programme: "Summer Internship 2026", duration: "8 Weeks", issueDate: "July 2026", fileReady: false },
  "EX4JK5": { name: "Certificate Holder", programme: "Summer Internship 2026", duration: "8 Weeks", issueDate: "July 2026", fileReady: false },
  "KU7BV4": { name: "Certificate Holder", programme: "Summer Internship 2026", duration: "8 Weeks", issueDate: "July 2026", fileReady: false },
  "YB4XN2": { name: "Certificate Holder", programme: "Summer Internship 2026", duration: "8 Weeks", issueDate: "July 2026", fileReady: true },
  "BSLFF6": { name: "Certificate Holder", programme: "Summer Internship 2026", duration: "8 Weeks", issueDate: "July 2026", fileReady: false }
};

function resetResults() {
  document.getElementById('resultValid').style.display   = 'none';
  document.getElementById('resultInvalid').style.display = 'none';
}

function verify() {
  var raw = document.getElementById('certInput').value.trim().toUpperCase();

  if (!raw) return;

  resetResults();

  var cert = CERT_DATA[raw];

  if (cert) {
    document.getElementById('displayId').textContent        = raw;
    document.getElementById('displayName').textContent      = cert.name;
    document.getElementById('displayProgramme').textContent = cert.programme;
    document.getElementById('displayDuration').textContent  = cert.duration;
    document.getElementById('displayDate').textContent      = cert.issueDate;

    if (cert.fileReady) {
      document.getElementById('downloadBtn').href = 'certificates/' + raw + '.pdf';
      document.getElementById('downloadBtn').style.display = 'inline-block';
      document.getElementById('pendingNote').style.display = 'none';
    } else {
      document.getElementById('downloadBtn').style.display = 'none';
      document.getElementById('pendingNote').style.display = 'block';
    }

    document.getElementById('resultValid').style.display = 'block';
  } else {
    document.getElementById('invalidId').textContent = raw;
    document.getElementById('resultInvalid').style.display = 'block';
  }
}

document.getElementById('verifyBtn').addEventListener('click', verify);

document.getElementById('certInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') verify();
});

document.getElementById('certInput').addEventListener('input', function() {
  
  resetResults();
});

// Auto-verify if ID passed in URL: verify.html?id=EKX3CJ
window.addEventListener('DOMContentLoaded', function() {
  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  if (id) {
    document.getElementById('certInput').value = id.toUpperCase();
    verify();
  }
});
