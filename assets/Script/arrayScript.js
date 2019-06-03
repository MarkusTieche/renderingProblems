cc.Class({
    extends: cc.Component,

    properties: {
      modelPrefab:cc.Prefab,
      camera:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.offset = 0;
        this.move = true;
        for (let i = 0; i < 10; i++) {
            var model = cc.instantiate(this.modelPrefab)
                model.y = 100*i
            this.offset +=1;
            this.node.addChild(model)
        }
    },

    update (dt) 
    {

        if(this.move)
        {

            if(this.camera.y % 100 == 0)
            {
                this.node.children[this.offset%10].y = this.offset*100;
                cc.log(this.node.children[this.offset%10].y)
                this.offset+=1
            }

            if(this.camera.y > 50000)
            {
                this.move = false;
            }

            this.camera.y += 20
        }


    },
});
