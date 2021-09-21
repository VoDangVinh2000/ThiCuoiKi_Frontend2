class feel{
    constructor (_feel,_vinh){
        this.feel = _feel;
        this.vinh = _vinh;
    }
    get getFeel(){
      return this.feel;
    }
    set getFeel(value){
      this.feel = value;
    }
      get getVinh(){
      return this.vinh;
    }
    set getVinh(value){
      this.vinh = value;
    }
}