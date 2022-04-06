// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.4;

import "./ERC20.sol";

/// @title ERC20GodMode
/// @author Paul Razvan Berg
/// @notice Allows anyone to mint or burn any amount of tokens to any account.
contract ERC20GodMode is ERC20 {
    /// EVENTS ///

    event Burn(address indexed holder, uint256 burnAmount);

    event Mint(address indexed beneficiary, uint256 mintAmount);

    /// CONSTRUCTOR ///

    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_
    ) ERC20(name_, symbol_, decimals_) {
        // solhint-disable-previous-line no-empty-blocks
    }

    /// PUBLIC NON-CONSTANT FUNCTIONS ///

    /// @notice Destroys `burnAmount` tokens from `holder`, reducing the token supply.
    /// @param holder The account whose tokens to burn.
    /// @param burnAmount The amount of tokens to destroy.
    function burn(address holder, uint256 burnAmount) public {
        burnInternal(holder, burnAmount);
    }

    /// @notice Prints new tokens into existence and assigns them to `beneficiary`, increasing the
    /// total supply.
    /// @param beneficiary The account for which to mint the tokens.
    /// @param mintAmount The amount of tokens to print into existence.
    function mint(address beneficiary, uint256 mintAmount) public {
        mintInternal(beneficiary, mintAmount);
    }
}
