import { times } from "lodash";
export const randomImg = async (size) => {
  const url = `https://picsum.photos/${size}`;
  const response = await fetch(url);
  return response?.url;
};

export const loadImg = async (size = 300) => {
  const url = `https://picsum.photos/${size}`;
  let arr = times(10);
  let pormise = arr.map(async () => {
    const response = await fetch(url);
    return response?.url;
  });
  const res = await Promise.all(pormise);
  return res;
};

class Factory {
  static id = 1
  static title;
  // 当类生成时运行且只运行一次,以后新建类的实例这个块就不会运行了
  static {
    try {
      const res = fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(response => response.json())
      .then(json => 
        this.title = json.title
        )

    } catch (error) {
      
    }
  }
}

export default Factory;