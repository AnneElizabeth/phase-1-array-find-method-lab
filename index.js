function superbowlWin (record) { 
    let weWon = record.find(function (record) {
        return record.result === 'W';    
        });
      return !!weWon ? weWon.year : undefined;
};