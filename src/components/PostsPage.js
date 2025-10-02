import React from 'react'
import CreatePostForm from '../shared/CreatePostForm'
import PostCard from '../shared/PostCard'


export default function PostsPage({ state, createPost, reactToPost }){
  return (
    <section>
    <div className="top-controls">Top Controls</div>
    <CreatePostForm users={state.users} onSubmit={createPost} />
    <div className="posts-list">
      <div className="posts-header">Posts header</div>
      {state.posts.slice(1).map(p => (
      <PostCard key={p.id} post={p} users={state.users} reactToPost={reactToPost} />
      ))}
    </div>
    </section>
)
}
