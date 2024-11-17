import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk';

const EmailWallet = () => {
  return (
    <DynamicContextProvider
      settings={{
        appID: 'your-app-id', // Obtain from Dynamic Dashboard
        environment: 'production', // Use 'sandbox' for testing
      }}
    >
      <div>
        <DynamicWidget />
      </div>
    </DynamicContextProvider>
  );
};

export default EmailWallet;
