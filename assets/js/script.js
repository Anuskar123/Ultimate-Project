// Demo JS for static FreshMart site
$(document).ready(function() {
    $('.add-to-cart').click(function() {
        var button = $(this);
        button.html('<i class="fas fa-check"></i> Added');
        button.removeClass('btn-primary').addClass('btn-success');
        setTimeout(function() {
            button.html('<i class="fas fa-cart-plus"></i> Add to Cart');
            button.removeClass('btn-success').addClass('btn-primary');
        }, 2000);
        showToast('Demo: Product added to cart!', 'success');
    });
});
function showToast(message, type) {
    var toastClass = type === 'success' ? 'alert-success' : 'alert-danger';
    var toast = $('<div class="alert ' + toastClass + ' alert-dismissible fade show position-fixed" style="top: 20px; right: 20px; z-index: 9999;">' +
                  '<span>' + message + '</span>' +
                  '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' +
                  '</div>');
    $('body').append(toast);
    setTimeout(function() {
        toast.remove();
    }, 2000);
}
