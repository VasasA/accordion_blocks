// $Id$
Drupal.behaviors.accordion_blocks = function(){
    // left side blocks
    var blocks;
    if($('#sidebar-left').length > 0){
      blocks = $("[id^='block']",$('#sidebar-left'));
    }
    else {
      blocks = $("[id^='block']",$('.sidebar-left'));
    }
    var containerLeft = $('<div></div>').prependTo(blocks.parent());
    containerLeft.append(blocks);
    containerLeft.accordion({ header: "h2", autoHeight: false });

    // right side blocks
    if($('#sidebar-right').length > 0) {
      blocks = $("[id^='block']",$('#sidebar-right'));
    }
    else { 
      blocks = $("[id^='block']",$('.sidebar-right'));
    }	
    var containerRight = $('<div></div>').prependTo(blocks.parent());
    containerRight.append(blocks);
    containerRight.accordion({ header: "h2", autoHeight: false });

    // just single navigation
    var blocks = $("[id^='block']",$('.side_nav'));
    if(blocks){
      var containerNav = $('<div></div>').prependTo(blocks.parent());
      containerNav.append(blocks);
      containerNav.accordion({ header: "h2", autoHeight: false });
    }
};

