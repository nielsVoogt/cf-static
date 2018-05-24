
(function(){

    // TEMP VIEW SWITCHING

    var elements = {
        btnMap:     document.getElementById('js_view-map'),
        btnList:    document.getElementById('js_view-list'),
        btnDetail:    document.getElementById('js_view-detail'),
        viewMap:    document.getElementById('js_map'),
        viewList:   document.getElementById('js_list'),
        viewDetail: document.getElementById('js_detail')
    }

    elements.btnMap.addEventListener('click', function(){
        elements.viewMap.style.display = 'block';
        elements.viewDetail.style.display = 'none';
        elements.viewList.style.display = 'none';
    });

    elements.btnList.addEventListener('click', function(){
        elements.viewMap.style.display = 'none';
        elements.viewDetail.style.display = 'none';
        elements.viewList.style.display = 'block';
    });

    elements.btnDetail.addEventListener('click', function(){
        elements.viewMap.style.display = 'none';
        elements.viewDetail.style.display = 'block';
        elements.viewList.style.display = 'none';
    });


})()