/*
{
  "title": "Hi Luke! Thanks for the great write up.",
  "pubDate": "2019-04-02 22:14:27",
  "link": "https://medium.com/@uriklar/hi-luke-thanks-for-the-great-write-up-5c459f097f1f?source=rss-f679134bf53d------2",
  "guid": "https://medium.com/p/5c459f097f1f",
  "author": "Uri Klar",
  "thumbnail": "https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=5c459f097f1f",
  "description": "\n<p>Hi Luke! Thanks for the great write up.<br>Question: correct me if i’m wrong, but does using this mean every component that uses useStateValue gets re-rendered on any state change whatsoever?</p>\n<img src=\"https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=5c459f097f1f\" width=\"1\" height=\"1\">\n",
  "content": "\n<p>Hi Luke! Thanks for the great write up.<br>Question: correct me if i’m wrong, but does using this mean every component that uses useStateValue gets re-rendered on any state change whatsoever?</p>\n<img src=\"https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=5c459f097f1f\" width=\"1\" height=\"1\">\n",
  "enclosure": {},
  "categories": []
}
*/
export default function PostPreview({ post }) {
  return (
    <div className="flex">
      <div className="h-32 w-32 overflow-hidden mr-4">
        <img src={post.thumbnail}></img>
      </div>
      <div className="">
        <div className="text-xl text-gray-900 font-semibold">{post.title}</div>
      </div>
    </div>
  );
}
