import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton address="3ea2cfd153b8d8505097b81c87c11f5d05097c18" tooltip connected />
      <ConnectButton
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        tooltip={{
          title: 'aaaaaabbbbbbcccccc',
        }}
        connected
      />
      <ConnectButton
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        tooltip={{
          title: 'aaaaaabbbbbbcccccc',
          copyable: false,
        }}
        connected
      />
    </Space>
  );
};

export default App;
