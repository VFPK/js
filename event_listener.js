self.addEventListener('message', function(e) {
    const { items, filterKeyword, sortOrder } = e.data;
    // Include the logic from applySortAndFilter here
    // Post back the results
    self.postMessage({ sortedFilteredItems: /* result of sorting and filtering */ });
});