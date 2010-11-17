exports.reply = {
  welcome:        '001',
  yourHost:       '002',
  created:        '003',
  myInfo:         '004',

  whoIsUser:      '311',
  whoIsServer:    '312',
  whoIsOperator:  '313',
  whoIsIdle:      '317',
  endOfWhoIs:     '318',
  whoIsChannels:  '319',

  topic:          '332',
  noTopic:        '331',
  inviting:       '341',
  nameReply:      '353',
  endNames:       '366',

  listStart:      '321',
  list:           '322',
  listEnd:        '323',

  motdStart:      '375',
  motd:           '372',
  motdEnd:        '376',
  who:            '352',
  endWho:         '315',
  channelModes:   '324',
  banList:        '367',
  endBan:         '368'
};

exports.errors = {
  // Errors
  noSuchNick:     '401',
  noSuckServer:   '402',
  cannotSend:     '404',
  noRecipient:    '411',
  noTextToSend:   '412',
  noNickGiven:    '431',
  badNick:        '432',
  nameInUse:      '433',
  userOnChannel:  '443',
  noSuchChannel:  '403',
  youAreBanned:   '465',
  keySet:         '467',
  channelIsFull:  '471',
  inviteOnly:     '473',
  banned:         '474',
  badChannelKey:  '475',
  channelOpsReq:  '482'
};

exports.validations = {
  invalidNick:    /[^\w_^`\\\[\]{}]/,
  // any 8bit code except SPACE, BELL, NUL, CR, LF and comma (',')
  invalidChannel: /[  \n\r,]/,

  // any 7-bit US_ASCII character, except NUL, CR, LF, FF, h/v TABs, and " "
  invalidChannelKey: /[ \n\r,\t]/
};
