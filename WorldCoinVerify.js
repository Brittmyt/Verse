import { WorldIDWidget } from '@worldcoin/id';

const WorldcoinVerify = () => {
  return (
    <div>
      <WorldIDWidget
        actionId="your-action-id" // Obtain from Worldcoin Dashboard
        signal="unique-user-id"  // Replace with user identifier
        enableTelemetry={true}
        onSuccess={(verificationResult) => {
          console.log('Verified:', verificationResult);
          alert('Verification successful!');
        }}
        onError={(error) => {
          console.error('Verification failed:', error);
          alert('Verification failed.');
        }}
      />
    </div>
  );
};

export default WorldcoinVerify;
