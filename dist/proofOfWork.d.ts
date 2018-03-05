import { IProofOfWork } from "@iota-pico/crypto/dist/interfaces/IProofOfWork";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { IWebPlatform } from "./IWebPlatform";
/**
 * ProofOfWork implementation using WebAssembly.
 */
export declare class ProofOfWork implements IProofOfWork {
    /**
     * Create a new instance of ProofOfWork.
     */
    constructor(webPlatform?: IWebPlatform);
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    initialize(): Promise<void>;
    /**
     * Performs single conversion per pow call.
     * @returns True if pow only does one conversion.
     */
    performsSingle(): boolean;
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    pow(trunkTransaction: Hash, branchTransaction: Hash, trytes: Trytes[], minWeightMagnitude: number): Promise<Trytes[]>;
}
