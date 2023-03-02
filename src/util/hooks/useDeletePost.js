export const useDeletePost = (id, setPosts, posts) => {
    const handleDelPost = () => {
        setPosts(posts?.filter(p => p?.id !== id))
    }
    return handleDelPost
}