class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    const cpuChoice = Math.floor(Math.random() * 3);

    return acceptedValues[cpuChoice];

  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){

    if ((userSelection === 'rock' && cpuSelection === 'scissors') || (userSelection === 'paper' && cpuSelection === 'rock') || (userSelection === 'scissors' && cpuSelection === 'paper'))
    {
        return 'win';
    }

    else if (userSelection === cpuSelection)

    {
        return 'tie';
    }

    else 

    {
      return 'lose';
    }

  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){

    const cpuSelection = this.generateCPUResponse();
    const result = this.determineWinner(userSelection, cpuSelection)
    let resultMsg = `${this.username} selected ${userSelection}, CPU selected ${cpuSelection}: `;

    if (result === 'win')
    {
      this.score.user++;
      resultMsg += `${this.username} wins!`;
    }

    else if (result === 'lose')
    {
      this.score.cpu++;
      resultMsg += 'CPU wins!';
    }

    this.gameHistoryLog.push(resultMsg);
  }

}