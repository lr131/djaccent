# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-06 04:02
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0001_initial'),
        ('schedule', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='history',
            name='group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='ghist', to='teacher.Group'),
        ),
        migrations.AddField(
            model_name='plan',
            name='group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='sched', to='teacher.Group'),
        ),
        migrations.AlterField(
            model_name='history',
            name='student',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='myhist', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='plan',
            name='student',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='myscheds', to=settings.AUTH_USER_MODEL),
        ),
    ]
