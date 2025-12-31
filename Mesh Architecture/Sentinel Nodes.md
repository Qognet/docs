# Sentinel Nodes

Sentinel Nodes (SNs) are the backbone of Qognet's data acquisition strategy. They are lightweight, require no initial stake, and focus purely on massive-scale, low-latency data ingestion.

## SN Functionality and Data Streams

SNs maintain constant, high-throughput connections to monitor specific subsets of the Web3 landscape. Their sole function is to ingest these raw data streams and normalize them for immediate input to the computational Cognito Nodes (CNs). The primary monitored streams include:

- Block Data Feeds: Monitoring transaction mempools for specific chains (e.g., Ethereum, Solana, Polygon), confirmed transaction pools, and block finalization endpoints.

- Off-Chain Indicators: Scraping dark web forums, social media, and developer channels for pre-exploit chatter or key leaks that could signal an imminent threat.

- Contract Interaction Monitoring (CIM): Logging specific calls and events to high-value smart contracts (e.g., DEXs, bridges) to generate statistical baselines for normal operation, allowing the AI to detect statistically significant anomalies.

## Operational Requirements and Rewards

### Operational Requirements
Anybody can be an SN operator, but they need internet access, and a device to join the network. 

### Consensus

SNs operators are bound by the Proof-of-Reputation (PoR) Mechanism

<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem; margin-bottom: 1rem;">
  <a href="./Nodes%20Consensus%20Mechanism#proof-of-reputation-por" style="flex: 1 1 250px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; text-align: center; text-decoration: none; background-color: var(--vp-c-bg-soft);">
    <h4 style="margin: 0; border: none;">Nodes Consensus Mechanisms</h4>
  </a>
</div>

### Rewards
SNs operators that maintain a high PoR receive a proportional share (typically 25%-30%) of the overall Proof-of-Defensive-Value (PoDV) reward pool.