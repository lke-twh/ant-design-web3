import { Chain, ChainIds } from '@ant-design/web3-common';
import { Mainnet } from '@ant-design/web3-assets';
import { EIP1193IncludeProvider, JsonRpcProvider } from '../types';

export interface ZANJsonRpcProviderProps {
  apiKey: string;
}

export class ZANJsonRpcProvider implements JsonRpcProvider {
  constructor(private options: ZANJsonRpcProviderProps) {}

  // TODO: support more chain
  getRpcUrl(chain: Chain): string {
    if (chain.id === ChainIds.Mainnet) {
      return `https://api.zan.top/node/v1/eth/mainnet/${this.options.apiKey}`;
    }
    throw new Error(`Unsupported chain: ${chain}`);
  }

  async create(): Promise<EIP1193IncludeProvider> {
    const provider = {
      request: async (request: { method: string; params?: any }) => {
        const { method, params } = request;
        const response = await fetch(this.getRpcUrl(Mainnet), {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method,
            params,
            id: 1,
          }),
        });
        const res = await response.json();
        const { result, error } = res;
        if (error) {
          throw new Error(error.message);
        }
        return result;
      },
    };
    return {
      provider,
    };
  }
}
