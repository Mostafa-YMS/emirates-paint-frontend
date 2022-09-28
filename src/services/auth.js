import ls from "local-storage";
class AUTH {
  constructor() {
    ls.on("userObj", (value) => {
      if (!this.isAuthenticated()) {
        console.log("Logged Out");
      } else {
        console.log("Logged In");
      }
    });
  }

  login(userObj) {
    console.log(userObj);
    if (userObj.userId) {
      var ts = Math.round(new Date().getTime() / 1000);
      //10 seconds less for safety time.
      //Otherwise, frontend may send a request with a near expired token
      //which will be expired by the time it reaches the server
      userObj.expiry = ts + userObj.lifetime - 10;
      ls.set("userObj", userObj);
      return true;
    } else {
      return false;
    }
  }

  isAuthenticated() {
    let userObj = ls.get("userObj");
    if (userObj && userObj.userId) {
      return true;
    }
    return false;
  }

  isTokenExpired() {
    let userObj = ls.get("userObj");
    if (userObj && userObj.accessToken) {
      var ts = Math.round(new Date().getTime() / 1000);
      if (ts > userObj.expiry) {
        return true;
      }
    }
    return false;
  }

  getUser() {
    let userObj = ls.get("userObj");
    if (userObj) {
      return userObj;
    }
    return null;
  }

  getUserId() {
    let userObj = ls.get("userObj");
    if (userObj && userObj.userId) {
      return userObj.userId;
    }
    return null;
  }

  getUserType() {
    let userObj = ls.get("userObj");
    if (userObj && userObj.userType) {

      return userObj.userType;
    }
    return null;
  }

  getAccessToken() {
    let userObj = ls.get("userObj");
    if (userObj && userObj.accessToken) {
      return userObj.accessToken;
    }
    return null;
  }

  getRefreshToken() {
    let userObj = ls.get("userObj");
    if (userObj && userObj.refreshToken) {
      return userObj.refreshToken;
    }
    return null;
  }

  logout() {
    ls.remove("userObj");
    ls.remove("pin");
    ls.remove("locked");
  }

  updateLastUsed() {
    ls.set("lastUsedTime", new Date());
  }

  checkLastUsed() {
    console.log("checkLastUsed");
    try {
      var lastUsedTime = ls.get("lastUsedTime");
      var diff = new Date().getTime() - new Date(lastUsedTime).getTime();
      if (diff > 10000) {
        this.lock();
      } else {
        this.updateLastUsed();
      }
    } catch (ex) {
      console.log(ex);
      this.lock();
    }
  }

  checkLocked() {
    var locked = ls.get("locked");
    return locked === false ? false : true;
  }

  lock() {
    ls.set("locked", true);
  }

  unlock() {
    ls.set("locked", false);
  }

  setPin(pin) {
    ls.set("pin", pin);
  }

  getPin() {
    return ls.get("pin");
  }
}

export default new AUTH();
