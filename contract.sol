pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;


struct Bid {
    address user;
    uint articleId;
    uint value;
}

struct Article {
    address owner;
    string img;
    string data;
    uint end;
}

contract Auction {

    // address private owner;

    Article[] public articles;
    Bid[] public bids;
    uint public articleCount ;
    
    // Events
    event articleAdded(Article newArticle);


    constructor() public {
    //    owner = msg.sender;
        articleCount = 0;
    }

    function addArticle(string memory  _data,  string memory _img) public {
         Article memory newArticle = Article({
            owner: msg.sender,
            end: now + 1 hours,
            img: _img,
            data: _data
        });
        
        articles.push(newArticle);
        articleCount++;
        
        emit articleAdded(newArticle);
    }

    function addBid(uint _article ) payable public {
        bool isNewBid = true;
        address bidder = msg.sender;

        // if already bid on article => increment
        for (uint b = 0; b < bids.length; b++) {
            if(bids[b].articleId == _article && bids[b].user == bidder){
                bids[b].value += msg.value; // wei
                isNewBid = false;
            }
        }

        // if user hasn't bid yet => add a new bid
        if (isNewBid) {
            bids.push(Bid({
                user:bidder,
                value: msg.value,
                articleId:_article
            }));
        }
    }


    function getWinner(uint _article) public view returns (address winner_, uint standingBid_) {
        uint winningPrice = 0;

        for (uint b = 0; b < bids.length; b++) {
            if (bids[b].articleId == _article && bids[b].value > winningPrice) {
                winningPrice = bids[b].value;
                winner_ =  bids[b].user;
                standingBid_ = bids[b].value;
            }
        }
    }
        
    modifier notWinner(uint _article) {
        (address winner, uint standingBid_) =  getWinner(_article);
        if (msg.sender != winner) _;
    }


    function getMoneyBack(uint _article) public payable notWinner(_article) {
        require(articles[_article].end > now , "Auction hasnt closed yet");
        
        uint amount = 0;
        
        for (uint b = 0; b < bids.length; b++) {
            if (bids[b].articleId == _article && bids[b].user == msg.sender) {
                amount = bids[b].value;
                break;
            }
        }
        
        
        msg.sender.transfer(amount);
    }

}
