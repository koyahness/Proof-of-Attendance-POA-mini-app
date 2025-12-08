// lib/abi.ts
export const POA_ABI = [
  {
    inputs: [
      { name: "eventId",   type: "bytes32" },
      { name: "signature", type: "bytes"   }
    ],
    name: "mintAttendance",
    stateMutability: "nonpayable",
    type: "function"
  },
] as const;
