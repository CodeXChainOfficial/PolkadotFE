import { AbiRegistry, Address, SmartContract } from "@multiversx/sdk-core/out"

export function getContractFromAbi(address: string, abi: any) {
  const abiRegistry = AbiRegistry.create(abi)

  return new SmartContract({
    address: new Address(address),
    abi: abiRegistry,
  })
}
