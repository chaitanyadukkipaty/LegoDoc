pragma solidity ^ 0.4 .24;
// Ignore code just use
library SafeMath {
    function add(uint a, uint b) internal pure returns(uint c) {
        c = a + b;
        require(c >= a);
    }

    function sub(uint a, uint b) internal pure returns(uint c) {
        require(b <= a);
        c = a - b;
    }

    function mul(uint a, uint b) internal pure returns(uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }

    function div(uint a, uint b) internal pure returns(uint c) {
        require(b > 0);
        c = a / b;
    }
}

contract ERC20Interface {
    function totalSupply() public constant returns(uint);
    function balanceOf(address tokenOwner) public constant returns(uint balance);
    function transfer(address to, uint tokens) public returns(bool success);
    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}

contract ApproveAndCallFallBack {
    function receiveApproval(address from, uint256 tokens, address token, bytes data) public;
}

//start reading from here.

contract Owned {
    address public owner;
    address public newOwner;
    event OwnershipTransferred(address indexed _from, address indexed _to);
    constructor() public {
        owner = msg.sender;
    }
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    function transferOwnership(address _newOwner) public onlyOwner {
        newOwner = _newOwner;
    }
    function acceptOwnership() public {
        require(msg.sender == newOwner);
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
        newOwner = address(0);
    }
}

contract Coin is ERC20Interface, Owned {
    using SafeMath
    for uint;
    string public symbol;
    string public name;
    uint8 public decimals;
    uint _totalSupply;
    uint x;
    mapping(address => mapping(address => uint)) campain;
    mapping(address => uint) campain_fund;
    mapping(address => uint) balances;
    mapping(address => uint) campain_tokens;
    event Initilize_account(address indexed from, uint tokens);
    event Milestone(address indexed from);
    event Start_campain(address indexed from);
    constructor() public {
        symbol = "FIXED";
        name = "Example Fixed Supply Token";
        decimals = 18;
        _totalSupply = 1000000 * 10 ** uint(decimals);
        balances[owner] = _totalSupply;
        emit Transfer(address(0), owner, _totalSupply);
    }
    function totalSupply() public view returns(uint) {
        return _totalSupply.sub(balances[address(0)]);
    }
    function balanceOf(address tokenOwner) public view returns(uint balance) {

        return balances[tokenOwner];

    }


    // Initilize accounts
    
     function setAccount(address user) public returns(bool success) {
    
        balances[user] = balances[user].add(5000);
        emit Initilize_account(user, 5000);
        return true;
    }
    
    // Initilize accounts done.
    
    //Milestone 
    
    function milestone(address user) public returns(bool success) {
        x =  campain_tokens[user];
        x = x/3;
        balances[user] = balances[user].add(x);
        emit Milestone(user);
        return true;
    }
    
    // milestone done
    
    // Start_campain
    
    function start_campain(address user, uint amt) public returns(bool success){
        balances[user] = balances[user].sub(amt);
        campain_tokens[user] = campain_tokens[user].add(amt);
        emit Start_campain(user);
        return true;
    }
    
    // Start_campain done
    
    // Emit Transactions
    
    function donations(address user, address backer, uint amt) public returns(bool success) {
        emit Transfer(user, backer, amt);
        return true;
    }
    
    // Emit Transactions done.
    
    // function funds_campain(address user, address backer, uint amount) public returns(bool success){
    //     campain[user][backer] = campain[user][backer].add(amount);
    //     campain_fund[user] = campain_fund[user].add(amount);
    //     return true;
    // }
    
 

    function transfer(address to, uint tokens) public returns(bool success)  {

        balances[msg.sender] = balances[msg.sender].sub(tokens);

        balances[to] = balances[to].add(tokens);

        emit Transfer(msg.sender, to, tokens);

        return true;

    }


    function() public payable {

        revert();

    }


    function transferAnyERC20Token(address tokenAddress, uint tokens) public onlyOwner returns(bool success) {

        return ERC20Interface(tokenAddress).transfer(owner, tokens);

    }

}
