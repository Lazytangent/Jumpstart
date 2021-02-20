"""empty message

Revision ID: 9a3024fa6b17
Revises: ffdc0a98111c
Create Date: 2021-02-20 14:25:54.238155

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9a3024fa6b17'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('projects')
    op.add_column('users', sa.Column('hashed_password', sa.String(length=255), nullable=False))
    op.drop_column('users', 'profileImageUrl')
    op.drop_column('users', 'state')
    op.drop_column('users', 'city')
    op.drop_column('users', 'hashedPassword')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('hashedPassword', sa.VARCHAR(length=255), autoincrement=False, nullable=False))
    op.add_column('users', sa.Column('city', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
    op.add_column('users', sa.Column('state', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
    op.add_column('users', sa.Column('profileImageUrl', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    op.drop_column('users', 'hashed_password')
    op.create_table('projects',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', sa.VARCHAR(length=50), autoincrement=False, nullable=False),
    sa.Column('userId', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('thumbnailImgUrl', sa.VARCHAR(length=255), autoincrement=False, nullable=True),
    sa.Column('description', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('goalAmount', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('minPledge', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], name='projects_userId_fkey'),
    sa.PrimaryKeyConstraint('id', name='projects_pkey')
    )
    # ### end Alembic commands ###
