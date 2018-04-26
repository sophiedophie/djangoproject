from django.db import models
from my_awesome_project.users import models as user_models

# Create your models here.
class TimeStampedModel(models.Model):
    # this is abstract model
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # e.g. verbose model (verbose: using more words than necessary. thus, notify more info)
    class Meta:
        abstract = True


class Image(TimeStampedModel):
    """ Image model """
    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return '{} - {}'.format(self.location, self.caption)

class Comment(TimeStampedModel):
    """ Comment model """
    message = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.PROTECT, null=True)
    image = models.ForeignKey(Image, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.message

class Like(TimeStampedModel):
    """ Like model """
    creator = models.ForeignKey(user_models.User, on_delete=models.PROTECT, null=True)
    image = models.ForeignKey(Image, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return 'User: {} - Image caption: {}'.format(self.creator.username, self.image.caption)