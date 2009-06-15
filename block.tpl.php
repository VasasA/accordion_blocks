<?php
// $Id$
?>
<div id="block-<?php print $block->module .'-'. $block->delta; ?>" class="clear-block block-<?php print $block->module ?>">

<?php if (!empty($block->subject)): ?>
  <h2><a href="#"><?php print $block->subject ?></a></h2>
<?php endif;?>
  <div class="content"><?php print $block->content ?></div>
</div>
