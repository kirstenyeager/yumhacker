UsersShowUserView = Backbone.View.extend({
    events: {
    },

    initialize: function () {
        this.listenTo(this.model, 'sync', this.render);
        this.model.fetch();
    },

    render: function () {
        this.$el.html(render('users/show_user', this.model));
        this.application_follow_button_view = new ApplicationFollowButtonView({ 
            el: this.$('.follow_btn_container'),
            user_id: this.model.get('id') 
        });
    }
});