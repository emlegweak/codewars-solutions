function openOrSenior(data) {
    function isMember(member) {
        return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
    }
    return data.map(isMember);
}