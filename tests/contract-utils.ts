import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  ConsecutiveTransfer,
  DiamondMinted,
  FacetRegistered,
  FacetUnregistered,
  Transfer
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createConsecutiveTransferEvent(
  fromTokenId: BigInt,
  toTokenId: BigInt,
  from: Address,
  to: Address
): ConsecutiveTransfer {
  let consecutiveTransferEvent = changetype<ConsecutiveTransfer>(newMockEvent())

  consecutiveTransferEvent.parameters = new Array()

  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenId",
      ethereum.Value.fromUnsignedBigInt(fromTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "toTokenId",
      ethereum.Value.fromUnsignedBigInt(toTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return consecutiveTransferEvent
}

export function createDiamondMintedEvent(
  tokenId: BigInt,
  diamond: Address
): DiamondMinted {
  let diamondMintedEvent = changetype<DiamondMinted>(newMockEvent())

  diamondMintedEvent.parameters = new Array()

  diamondMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  diamondMintedEvent.parameters.push(
    new ethereum.EventParam("diamond", ethereum.Value.fromAddress(diamond))
  )

  return diamondMintedEvent
}

export function createFacetRegisteredEvent(
  facet: Address,
  selectors: Array<Bytes>
): FacetRegistered {
  let facetRegisteredEvent = changetype<FacetRegistered>(newMockEvent())

  facetRegisteredEvent.parameters = new Array()

  facetRegisteredEvent.parameters.push(
    new ethereum.EventParam("facet", ethereum.Value.fromAddress(facet))
  )
  facetRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "selectors",
      ethereum.Value.fromFixedBytesArray(selectors)
    )
  )

  return facetRegisteredEvent
}

export function createFacetUnregisteredEvent(
  facet: Address
): FacetUnregistered {
  let facetUnregisteredEvent = changetype<FacetUnregistered>(newMockEvent())

  facetUnregisteredEvent.parameters = new Array()

  facetUnregisteredEvent.parameters.push(
    new ethereum.EventParam("facet", ethereum.Value.fromAddress(facet))
  )

  return facetUnregisteredEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
