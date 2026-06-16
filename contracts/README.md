# BaseGrid Smart Contracts

This is the Hardhat project containing the core smart contracts for the BaseGrid platform.

## Contracts

- **BaseGridEscrow.sol**: Handles escrow and release of ETH rewards.
- **BaseGridReputation.sol**: Handles worker reputation scores.
- **BaseGridTaskManager.sol**: Central contract orchestrating tasks, connecting escrow and reputation.

## Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
