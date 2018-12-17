const query = require('../db');
const error = require('../../erro');

function strOfBid(bids) {
    sql_bid = bids.join(',');
    sql_bid = "Bid in (" +sql_bid + ")"
    return sql_bid;
 }

function strOfRules(name, verb, value){
    sql_str = name + ' ' + verb + ' ' + "'%" + value + "%'";
    return sql_str;
}

function getRuleStr(parama) {
    let every_sql = [];
    if (parama['bid'].length !== 0){
        every_sql.push(strOfBid(parama['bid']));
    }
    if (parama['bplace']!==''){
        every_sql.push(strOfRules('Bplace', 'like', parama['bplace']))
    }
    if (parama['bname']!==''){
        every_sql.push(strOfRules('Bname', 'like', parama['bname']))
    }
    if (parama['bauthor']!==''){
        every_sql.push(strOfRules('Bauthor', 'like', parama['bauthor']))
    }
    every_sql.push("Bexisted = '1'")
    let sql_rules = every_sql.join(' and ');
    return sql_rules
}

async function sim_consult(parama) {
    let sql_str = 'select Bid,Bname,Bpub,Bauthor,Bplace,Bstatus from Book Where ' + getRuleStr(parama);
    console.log(sql_str);
    let rslt = await query.query_usr(sql_str);
    console.log(rslt)
    return rslt;
}
 
module.exports.consult = sim_consult;