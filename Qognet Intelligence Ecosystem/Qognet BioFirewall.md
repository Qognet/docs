# Qognet BioFirewall

The Qognet BioFirewall is the core enforcement mechanism, enabling protocols and decentralized applications (DApps) to instantly neutralize incoming threats based on the validated Qognet Safety Score (QSS) and Defensive Signals. It is designed to operate non-custodially and without introducing centralized points of failure.

## Wallet/DApp SDK Integration and API Blocking
The primary deployment vector for the BioFirewall is through highly optimized, minimal SDKs designed for easy integration into existing DApp and wallet frontends. 

::: details SDKs and APIs
Information regarding SDKs and APIs can be found [here](../../Products/SDK%20and%20API/overview.md).
:::

### SDK Integration

DApps and wallets integrate the BioFirewall SDK to intercept transaction requests locally before they are broadcast to the mempool.

### API Blocking

The SDK utilizes an API gateway to query the Qognet Finality Layer <code>Qognet Threat Genome</code> for the latest threat status related to the destination contract, sender address, or transaction type. If a high-confidence Defensive Signal is active, the SDK can halt the transaction locally, effectively blocking the exploit at the user's interface layer before it can be processed by the blockchain.

## Preventing Transactions based on QSS
Every address, contract, and token interaction within the Qognet Mesh is assigned a dynamic Qognet Safety Score (QSS). The BioFirewall leverages this score to apply granular, risk-based filtering.

### Threshold Enforcement
Protocols set pre-defined QSS thresholds. For instance, a high-value DeFi lending protocol may require all incoming deposits to originate from an address with a QSS above 85.

### Adaptive Policy

When a finalized Defensive Signal identifies a flash-loan attack, the QSS for the associated exploiter addresses and contracts instantly drops to zero. The BioFirewall recognizes this state change and, in accordance with the protocol's policy, automatically rejects all associated transactions, effectively preventing the attack in real time.