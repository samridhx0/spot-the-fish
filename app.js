// Game data
const emails = [
  {
    "id": "1",
    "from": "netflix@security-alert.com",
    "subject": "Netflix Password Expiry - Act Now!",
    "body": "Dear Netflix User,\n\nYour Netflix password is due to expire in 24 hours due to increased security threats. Please reset your password immediately to avoid service interruption.\n\nClick here to reset your password: [Reset Password]\n\nYour friends at Netflix,\nThe Netflix Team",
    "isPhish": true,
    "explanation": "This is a phishing email. Red flags: (1) The sender domain 'security-alert.com' is not Netflix's official domain, (2) Creates false urgency with 24-hour expiry, (3) Netflix doesn't typically expire passwords, (4) Suspicious generic greeting 'Dear Netflix User' instead of your actual name."
  },
  {
    "id": "2",
    "from": "support@dropbox.com",
    "subject": "Welcome to Dropbox - Your account is ready!",
    "body": "Hi there,\n\nWelcome to Dropbox! Your account has been successfully created and you're ready to start storing and sharing your files.\n\nYour free account includes:\n• 2GB of storage space\n• File synchronization across devices\n• Basic sharing features\n\nTo get started, simply download the Dropbox app or visit dropbox.com to upload your first files.\n\nBest regards,\nThe Dropbox Team",
    "isPhish": false,
    "explanation": "This is a legitimate email. It comes from Dropbox's official domain, provides useful information without urgency, doesn't ask for sensitive information, and matches typical welcome email patterns from legitimate services."
  },
  {
    "id": "3",
    "from": "hr@yourcompany.com",
    "subject": "URGENT: Complete This Survey for $500 Bonus!",
    "body": "Dear Employee,\n\nYou have been selected for a special New Year bonus of $500! To claim your bonus, please complete the attached survey and return it within 48 hours.\n\nThis is a limited-time offer and failure to respond will result in forfeiture of your bonus.\n\nClick here to download the survey: [Download Survey]\n\nBest regards,\nHR Department",
    "isPhish": true,
    "explanation": "This is a phishing email. Red flags: (1) Creates false urgency with 48-hour deadline, (2) Unrealistic offer of $500 bonus for a simple survey, (3) Threatens forfeiture to pressure action, (4) Asks to download an attachment which could contain malware, (5) Generic greeting 'Dear Employee' instead of your actual name."
  },
  {
    "id": "4",
    "from": "orders@amazon.com",
    "subject": "Your order has been shipped - Tracking #1Z9999999999",
    "body": "Hello,\n\nYour recent order has been shipped and is on its way to you.\n\nOrder Number: 123-4567890-1234567\nTracking Number: 1Z9999999999\nExpected Delivery: January 15, 2025\n\nYou can track your package at: amazon.com/tracking\n\nItems in this shipment:\n• Wireless Bluetooth Headphones - $79.99\n\nThank you for choosing Amazon.\n\nBest regards,\nAmazon Customer Service",
    "isPhish": false,
    "explanation": "This is a legitimate email. It comes from Amazon's official domain, provides specific order and tracking information, doesn't create urgency or ask for sensitive information, and follows Amazon's typical shipping notification format."
  },
  {
    "id": "5",
    "from": "security@paypal-verification.net",
    "subject": "PayPal Account Limited - Verify Now",
    "body": "Dear PayPal User,\n\nWe have detected unusual activity on your PayPal account. For your security, we have temporarily limited your account access.\n\nTo restore full access, please verify your account information immediately:\n\nClick here to verify: [Verify Account]\n\nFailure to verify within 24 hours will result in permanent account closure.\n\nPayPal Security Team",
    "isPhish": true,
    "explanation": "This is a phishing email. Red flags: (1) Sender domain 'paypal-verification.net' is not PayPal's official domain, (2) Creates false urgency with 24-hour deadline, (3) Threatens permanent account closure, (4) Generic greeting 'Dear PayPal User', (5) Asks for account verification which is a common phishing tactic."
  },
  {
    "id": "6",
    "from": "team@github.com",
    "subject": "Security alert: New sign-in from Chrome on Windows",
    "body": "Hi there,\n\nWe're writing to let you know that a new sign-in to your GitHub account was detected.\n\nDevice: Chrome on Windows\nLocation: San Francisco, CA, USA\nTime: January 10, 2025 at 2:30 PM PST\n\nIf this was you, no further action is required.\n\nIf this wasn't you, please secure your account immediately by changing your password and enabling two-factor authentication.\n\nYou can review your account security settings at: github.com/settings/security\n\nBest regards,\nGitHub Security Team",
    "isPhish": false,
    "explanation": "This is a legitimate email. It comes from GitHub's official domain, provides specific details about the sign-in, doesn't create false urgency, offers clear next steps, and follows GitHub's typical security notification format."
  },
  {
    "id": "7",
    "from": "support@microsoft-office365.co",
    "subject": "Your Office 365 subscription will expire tomorrow",
    "body": "Dear User,\n\nYour Microsoft Office 365 subscription will expire tomorrow. To avoid service interruption, please renew your subscription immediately.\n\nClick here to renew: [Renew Subscription]\n\nSpecial offer: Renew now and get 50% off your next year!\n\nThis offer expires in 12 hours.\n\nMicrosoft Support Team",
    "isPhish": true,
    "explanation": "This is a phishing email. Red flags: (1) Sender domain 'microsoft-office365.co' is not Microsoft's official domain, (2) Creates false urgency with 'tomorrow' expiry, (3) Offers unrealistic 50% discount, (4) Creates additional urgency with 12-hour offer expiry, (5) Generic greeting 'Dear User'."
  },
  {
    "id": "8",
    "from": "notifications@slack.com",
    "subject": "Weekly digest: 5 unread messages in #general",
    "body": "Hi there,\n\nHere's your weekly digest from the #general channel:\n\n• John Smith shared a project update (3 replies)\n• Sarah Johnson posted about the team lunch (2 replies)\n• Mike Brown asked about the quarterly meeting\n• Lisa Davis shared a helpful article\n• Tom Wilson posted a funny meme\n\nYou can catch up on all messages by visiting your workspace at: yourworkspace.slack.com\n\nTo manage your notification preferences, visit: slack.com/notifications\n\nBest regards,\nThe Slack Team",
    "isPhish": false,
    "explanation": "This is a legitimate email. It comes from Slack's official domain, provides useful information without urgency, doesn't ask for sensitive information, and follows Slack's typical digest email format with real workspace activity."
  },
  {
    "id": "9",
    "from": "alerts@bankofamerica-secure.com",
    "subject": "Suspicious Activity Detected - Account Locked",
    "body": "Dear Customer,\n\nWe have detected suspicious activity on your Bank of America account. For your protection, we have temporarily locked your account.\n\nSuspicious activity includes:\n• Login attempt from unusual location\n• Multiple failed password attempts\n• Unusual spending pattern\n\nTo unlock your account, please verify your identity immediately:\n\nClick here to verify: [Verify Identity]\n\nIf you do not verify within 2 hours, your account will be permanently closed.\n\nBank of America Security Team",
    "isPhish": true,
    "explanation": "This is a phishing email. Red flags: (1) Sender domain 'bankofamerica-secure.com' is not Bank of America's official domain, (2) Creates false urgency with 2-hour deadline, (3) Threatens permanent account closure, (4) Generic greeting 'Dear Customer', (5) Asks for identity verification which could steal login credentials."
  },
  {
    "id": "10",
    "from": "newsletter@techcrunch.com",
    "subject": "TechCrunch Daily: AI startup raises $100M, Apple's new features",
    "body": "Good morning,\n\nHere are today's top tech stories:\n\n🚀 AI Startup News\nOpenAI competitor raises $100M in Series B funding\n\n🍎 Apple Updates\nNew iOS features rolling out to beta users\n\n💰 Funding Rounds\nFintech startup secures $50M for expansion\n\n🔒 Cybersecurity\nNew vulnerability discovered in popular software\n\nRead the full stories at techcrunch.com\n\nUnsubscribe | Manage preferences | Contact us\n\nBest regards,\nTechCrunch Editorial Team",
    "isPhish": false,
    "explanation": "This is a legitimate email. It comes from TechCrunch's official domain, provides typical newsletter content, doesn't create urgency or ask for sensitive information, includes proper unsubscribe options, and follows standard newsletter format."
  }
];

// Game state
let currentEmailIndex = 0;
let score = 0;
let gameEmails = [];

// DOM elements - declare globally
let welcomeScreen, gameScreen, summaryScreen, startGameBtn, emailCard, emailFrom, emailSubject, emailContent;
let legitBtn, phishBtn, scoreDisplay, progressBar, progressText, feedbackModal, feedbackIcon, feedbackTitle;
let feedbackExplanation, continueBtn, finalScore, scorePercentage, scoreMessage, playAgainBtn;

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    welcomeScreen = document.getElementById('welcome-screen');
    gameScreen = document.getElementById('game-screen');
    summaryScreen = document.getElementById('summary-screen');
    startGameBtn = document.getElementById('start-game');
    emailCard = document.getElementById('email-card');
    emailFrom = document.getElementById('email-from');
    emailSubject = document.getElementById('email-subject');
    emailContent = document.getElementById('email-content');
    legitBtn = document.getElementById('legit-btn');
    phishBtn = document.getElementById('phish-btn');
    scoreDisplay = document.getElementById('score');
    progressBar = document.getElementById('progress');
    progressText = document.getElementById('progress-text');
    feedbackModal = document.getElementById('feedback-modal');
    feedbackIcon = document.getElementById('feedback-icon');
    feedbackTitle = document.getElementById('feedback-title');
    feedbackExplanation = document.getElementById('feedback-explanation');
    continueBtn = document.getElementById('continue-btn');
    finalScore = document.getElementById('final-score');
    scorePercentage = document.getElementById('score-percentage');
    scoreMessage = document.getElementById('score-message');
    playAgainBtn = document.getElementById('play-again');

    // Initialize the game
    initializeGame();
});

function initializeGame() {
    // Set up event listeners
    setupEventListeners();
    
    // Show welcome screen initially
    showScreen(welcomeScreen);
}

function setupEventListeners() {
    // Start game button
    startGameBtn.addEventListener('click', function() {
        startGame();
    });

    // Action buttons
    legitBtn.addEventListener('click', function() {
        handleAnswer('legit');
    });

    phishBtn.addEventListener('click', function() {
        handleAnswer('phish');
    });

    // Continue button
    continueBtn.addEventListener('click', function() {
        hideFeedback();
        setTimeout(() => {
            nextEmail();
        }, 200);
    });

    // Play again button
    playAgainBtn.addEventListener('click', function() {
        startGame();
    });

    // Keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            if (!welcomeScreen.classList.contains('hidden')) {
                startGame();
            } else if (!feedbackModal.classList.contains('hidden')) {
                hideFeedback();
                setTimeout(() => {
                    nextEmail();
                }, 200);
            } else if (!summaryScreen.classList.contains('hidden')) {
                startGame();
            }
        } else if (!gameScreen.classList.contains('hidden') && feedbackModal.classList.contains('hidden')) {
            if (e.key === 'l' || e.key === 'L') {
                if (!legitBtn.disabled) {
                    handleAnswer('legit');
                }
            } else if (e.key === 'p' || e.key === 'P') {
                if (!phishBtn.disabled) {
                    handleAnswer('phish');
                }
            }
        }
    });
}

// Utility functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showScreen(screenToShow) {
    const screens = [welcomeScreen, gameScreen, summaryScreen];
    screens.forEach(screen => {
        if (screen === screenToShow) {
            screen.classList.remove('hidden');
        } else {
            screen.classList.add('hidden');
        }
    });
}

function animateScore() {
    scoreDisplay.classList.add('animate-pulse');
    setTimeout(() => {
        scoreDisplay.classList.remove('animate-pulse');
    }, 600);
}

function updateProgress() {
    const progressPercent = ((currentEmailIndex + 1) / gameEmails.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `${currentEmailIndex + 1} of ${gameEmails.length}`;
}

function displayEmail() {
    const email = gameEmails[currentEmailIndex];
    
    // Add fade-out animation
    emailCard.classList.add('fade-out');
    
    setTimeout(() => {
        emailFrom.textContent = email.from;
        emailSubject.textContent = email.subject;
        emailContent.textContent = email.body;
        
        // Remove fade-out and add fade-in
        emailCard.classList.remove('fade-out');
        emailCard.classList.add('fade-in');
        
        // Remove fade-in class after animation
        setTimeout(() => {
            emailCard.classList.remove('fade-in');
        }, 300);
    }, 150);
    
    updateProgress();
}

function showFeedback(isCorrect, explanation) {
    feedbackModal.classList.remove('hidden');
    
    if (isCorrect) {
        feedbackModal.classList.add('feedback-correct');
        feedbackModal.classList.remove('feedback-incorrect');
        feedbackIcon.textContent = '✅';
        feedbackTitle.textContent = 'Correct!';
    } else {
        feedbackModal.classList.add('feedback-incorrect');
        feedbackModal.classList.remove('feedback-correct');
        feedbackIcon.textContent = '❌';
        feedbackTitle.textContent = 'Incorrect!';
    }
    
    feedbackExplanation.textContent = explanation;
}

function hideFeedback() {
    feedbackModal.classList.add('hidden');
}

function handleAnswer(userAnswer) {
    const email = gameEmails[currentEmailIndex];
    const isCorrect = (userAnswer === 'phish' && email.isPhish) || 
                     (userAnswer === 'legit' && !email.isPhish);
    
    if (isCorrect) {
        score++;
        scoreDisplay.textContent = score;
        animateScore();
    }
    
    // Disable buttons to prevent multiple clicks
    legitBtn.disabled = true;
    phishBtn.disabled = true;
    
    showFeedback(isCorrect, email.explanation);
}

function nextEmail() {
    currentEmailIndex++;
    
    if (currentEmailIndex >= gameEmails.length) {
        showSummary();
    } else {
        // Re-enable buttons
        legitBtn.disabled = false;
        phishBtn.disabled = false;
        displayEmail();
    }
}

function showSummary() {
    const percentage = Math.round((score / gameEmails.length) * 100);
    
    finalScore.textContent = score;
    scorePercentage.textContent = `${percentage}%`;
    
    // Determine score message and styling
    let message = '';
    let messageClass = '';
    
    if (percentage >= 90) {
        message = '🎉 Excellent! You\'re a phishing detection expert!';
        messageClass = 'score-excellent';
    } else if (percentage >= 70) {
        message = '👍 Good job! You have solid email security skills.';
        messageClass = 'score-good';
    } else if (percentage >= 50) {
        message = '⚠️ Not bad, but there\'s room for improvement.';
        messageClass = 'score-needs-improvement';
    } else {
        message = '📚 Consider learning more about email security to stay safe online.';
        messageClass = 'score-needs-improvement';
    }
    
    scoreMessage.textContent = message;
    scoreMessage.className = `score-message ${messageClass}`;
    
    showScreen(summaryScreen);
}

function startGame() {
    // Reset game state
    currentEmailIndex = 0;
    score = 0;
    scoreDisplay.textContent = '0';
    
    // Shuffle emails for variety
    gameEmails = shuffleArray(emails);
    
    // Show game screen and display first email
    showScreen(gameScreen);
    displayEmail();
    
    // Re-enable buttons
    legitBtn.disabled = false;
    phishBtn.disabled = false;
}