/* =============================================
   JKPS Solutions – Certificate Verification
   verify.js

   HOW TO ADD CERTIFICATE FILES WHEN READY:
   -----------------------------------------
   1. Place the PDF file in the /certificates/ folder.
      Filename must match the key in CERT_DATA below.
      Example: certificates/EKX3CJ.pdf

   2. In the CERT_DATA entry for that ID, change:
         fileReady: false
      to:
         fileReady: true

   That's it. The download button will appear automatically.
   ============================================= */

const CERT_DATA = {
  "EKX3CJ": {
    name: "Certificate Holder",         // ← Replace with actual name
    programme: "Summer Internship 2025",
    duration: "8 Weeks",
    issueDate: "July 2025",             // ← Update when actual date is known
    fileReady: false                    // ← Set to true when PDF is placed in /certificates/
  },
  "GFUSB2": {
    name: "Certificate Holder",
    programme: "Summer Internship 2025",
    duration: "8 Weeks",
    issueDate: "July 2025",
    fileReady: false
  },
  "LDQTDF": {
    name: "Certificate Holder",
    programme: "Summer Internship 2025",
    duration: "8 Weeks",
    issueDate: "July 2025",
    fileReady: false
  },
  "D6NSUZ": {
    name: "Certificate Holder",
    programme: "Summer Internship 2025",
    duration: "8 Weeks",
    issueDate: "July 2025",
    fileReady: false
  },
  "SFLV4P": {
    name: "Certificate Holder",
    programme: "Summer Internship 2025",
    duration: "8 Weeks",
    issueDate: "July 2025",
    fileReady: false
  },
  "J8CFEB": {
    name: "Certificate Holder",
    programme: "Summer Internship 2025",
    duration: "8 Weeks",
    issueDate: "July 2025",
    fileReady: false
  },
  "EM7RB5": {
    name: "Certificate Holder",
    programme: "Summer Internship 2025",
    duration: "8 Weeks",
    issueDate: "July 2025",
    fileReady: false
  },
  "5HCXAP": {
    name: "Certificate Holder",
    programme: "Summer Internship 2025",
    duration: "8 Weeks",
    issueDate: "July 2025",
    fileReady: false
  },
  "EX4JK5": {
    name: "Certificate Holder",
    programme: "Summer Internship 2025",
    duration: "8 Weeks",
    issueDate: "July 2025",
    fileReady: false
  },
  "KU7BV4": {
    name: "Certificate Holder",
    programme: "Summer Internship 2025",
    duration: "8 Weeks",
    issueDate: "July 2025",
    fileReady: false
  },
  "YB4XN2": {
    name: "Certificate Holder",
    programme: "Summer Internship 2025",
    duration: "8 Weeks",
    issueDate: "July 2025",
    fileReady: false
  },
  "BSLFF6": {
    name: "Certificate Holder",
    programme: "Summer Internship 2025",
    duration: "8 Weeks",
    issueDate: "July 2025",
    fileReady: false
  }
};

// DOM refs
const certInput   = document.getElementById('certInput');
const verifyBtn   = document.getElementById('verifyBtn');
const resultValid = document.getElementById('resultValid');
const resultInvalid = document.getElementById('resultInvalid');
const invalidId   = document.getElementById('invalidId');
const displayId   = document.getElementById('displayId');
const displayName = document.getElementById('displayName');
const displayProgramme = document.getElementById('displayProgramme');
const displayDuration  = document.getElementById('displayDuration');
const displayDate      = document.getElementById('displayDate');
const downloadBtn      = document.getElementById('downloadBtn');
const pendingNote      = document.getElementById('pendingNote');

function resetResults() {
  resultValid.style.display   = 'none';
  resultInvalid.style.display = 'none';
}

function verify() {
  const raw = certInput.value.trim().toUpperCase();

  if (!raw) {
    certInput.focus();
    certInput.style.borderColor = 'var(--teal)';
    return;
  }

  resetResults();

  const cert = CERT_DATA[raw];

  if (cert) {
    // Populate valid result
    displayId.textContent        = raw;
    displayName.textContent      = cert.name;
    displayProgramme.textContent = cert.programme;
    displayDuration.textContent  = cert.duration;
    displayDate.textContent      = cert.issueDate;

    // Handle download availability
    if (cert.fileReady) {
      downloadBtn.href = `certificates/${raw}.pdf`;
      downloadBtn.style.display = 'inline-block';
      pendingNote.style.display = 'none';
    } else {
      downloadBtn.style.display = 'none';
      pendingNote.style.display = 'block';
    }

    resultValid.style.display = 'block';
    resultValid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    // Invalid
    invalidId.textContent = raw;
    resultInvalid.style.display = 'block';
    resultInvalid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Button click
if (verifyBtn) {
  verifyBtn.addEventListener('click', verify);
}

// Enter key
if (certInput) {
  certInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') verify();
  });

  // Auto-uppercase as user types
certInput.addEventListener('input', () => {
    certInput.value = certInput.value.toUpperCase();
    certInput.style.borderColor = '';
    resetResults();
  });

// Check URL param: verify.html?id=EKX3CJ
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (id && certInput) {
    certInput.value = id.toUpperCase();
    verify();
  }
});
