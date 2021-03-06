/*
    Adapted from here
    https://github.com/iotaledger/ccurl/blob/master/src/lib/constants.h
*/
#ifndef __CONSTANTS_H__
#define __CONSTANTS_H__

#define HASH_LENGTH 243
#define NONCE_LENGTH HASH_LENGTH / 3
#define MESSAGE_LENGTH 6561
#define INT_LENGTH NONCE_LENGTH / 3
#define VALUE_LENGTH 81
#define VALUE_USABLE_LENGTH 33
#define NUMBER_OF_ROUNDS 81

#endif //__CONSTANTS_H__
