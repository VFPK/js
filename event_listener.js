self.addEventListener('message', function(e) {
    const { items } = e.data;
    // Apply sort and filter logic here
    // For simplicity, let's just sort comments by likeCount
    const sortedComments = items.sort((a, b) => {
        return b.snippet.topLevelComment.snippet.likeCount - a.snippet.topLevelComment.snippet.likeCount;
    });
    
    self.postMessage({ sortedComments: sortedComments });
});
