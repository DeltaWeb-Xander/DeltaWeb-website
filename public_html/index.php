<?php
// Controleer of een pagina parameter is ingesteld in de URL
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

// Veiligheidshalve: alleen toegestane pagina's worden geladen
$allowed_pages = ['home', 'about', 'contact', 'aanbod'];

if (in_array($page, $allowed_pages)) {
    // Laad de pagina zonder '.html' extensie, server voegt automatisch '.html' toe door .htaccess
    include($page);
} else {
    // Foutmelding als de pagina niet bestaat
    include('404.html');
}
?>
