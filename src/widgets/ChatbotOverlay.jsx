import { IconButton, Card, Typography, Input, Button } from "@material-tailwind/react";
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon,
  PaperAirplaneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

// Import social media icons
const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const MicrosoftIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 23 23">
    <path fill="#f35325" d="M1 1h10v10H1z"/>
    <path fill="#81bc06" d="M12 1h10v10H12z"/>
    <path fill="#05a6f0" d="M1 12h10v10H1z"/>
    <path fill="#ffba08" d="M12 12h10v10H12z"/>
  </svg>
);

export function ChatbotOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState('options');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState('');

  const handleGoogleAuth = () => {
    // Add Google Auth Logic
    setIsAuthenticated(true);
    setChatHistory([{ type: 'bot', text: 'Successfully signed in with Google!' }]);
  };

  const handleGithubAuth = () => {
    // Add GitHub Auth Logic
    setIsAuthenticated(true);
    setChatHistory([{ type: 'bot', text: 'Successfully signed in with GitHub!' }]);
  };

  const handleMicrosoftAuth = () => {
    // Add Microsoft Auth Logic
    setIsAuthenticated(true);
    setChatHistory([{ type: 'bot', text: 'Successfully signed in with Microsoft!' }]);
  };

  const handleEmailAuth = (e) => {
    e.preventDefault();
    // Add Email Auth Logic
    setIsAuthenticated(true);
    setChatHistory([{ type: 'bot', text: 'Successfully signed in with Email!' }]);
  };

  const AuthOptions = () => (
    <div className="flex flex-col gap-4 p-4">
      <Typography variant="h6" color="blue" className="text-center mb-4">
        Sign in to Chat
      </Typography>
      
      <Button 
        size="lg"
        className="flex items-center justify-center gap-3 bg-white text-gray-900 border border-gray-300 hover:bg-gray-100"
        onClick={handleGoogleAuth}
        fullWidth
      >
        <GoogleIcon />
        Continue with Google
      </Button>

      <Button 
        size="lg"
        className="flex items-center justify-center gap-3 bg-gray-900 text-white hover:bg-gray-800"
        onClick={handleGithubAuth}
        fullWidth
      >
        <GithubIcon />
        Continue with GitHub
      </Button>

      <Button 
        size="lg"
        className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600"
        onClick={handleMicrosoftAuth}
        fullWidth
      >
        <MicrosoftIcon />
        Continue with Microsoft
      </Button>

      <Button 
        size="lg"
        variant="outlined"
        className="flex items-center justify-center gap-3"
        onClick={() => setAuthMode('email')}
        fullWidth
      >
        <EnvelopeIcon className="h-5 w-5" />
        Continue with Email
      </Button>
    </div>
  );

  const ChatInterface = () => (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto mb-4 p-4">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div className={`inline-block p-2 rounded-lg ${
              msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
            }`}>
              <Typography>{msg.text}</Typography>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 p-4">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
        />
        <IconButton onClick={() => {
          if (message.trim()) {
            setChatHistory([...chatHistory, { type: 'user', text: message }]);
            setMessage('');
          }
        }}>
          <PaperAirplaneIcon className="h-5 w-5" />
        </IconButton>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <Card className="mb-4 w-80 h-[32rem] overflow-hidden">
          {!isAuthenticated ? <AuthOptions /> : <ChatInterface />}
        </Card>
      )}

      <IconButton
        size="lg"
        color="blue"
        className="rounded-full shadow-lg hover:shadow-blue-500/50 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
        )}
      </IconButton>
    </div>
  );
}
