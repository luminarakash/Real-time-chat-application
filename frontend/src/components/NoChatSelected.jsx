
import MyLogo from '../pages/logo.jpg';

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50 bg-gradient-to-t from-violet-300 ...">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-40 h-40 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <img src={MyLogo} alt="Logo" className="w-32 h-32 text-primary rounded-md" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-3xl font-bold">Welcome!</h2>
        <p className="text-base-content/60">
        Spark a connection, ignite a conversation choose a chat and let the magic begin..!
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
