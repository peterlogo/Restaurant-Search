import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer KbDEOnasPbDNYziAVeTjkAu-A68eWT9oa9Xhjt-C8zaGkBpMh0SICN8UEGlsm6MpPJfXPH9y_ufnd2IjbCbZQgqTtqMShtfC6FdqblAp_qSyOR-8ha-lLXvzxBNCXnYx"
  }
});
